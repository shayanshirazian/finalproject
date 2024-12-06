import React, { useEffect, useState } from "react";
import Divider from "../cartDetails/Divider";
import PrimaryRow from "../cartDetails/PrimaryRow";
import SecondaryRow from "../cartDetails/SecondaryRow";
import TertiaryRow from "../cartDetails/TertiaryRow";
import QuaternaryRow from "../cartDetails/QuaternaryRow";
import ContentModal from "../modals/ContentModal"; // Assuming ContentModal is imported

const FutureOrderDetails = () => {
        // State to store the orders fetched from the API
        const [orders, setOrders] = useState([]); // <-- Define the orders state here
        const [loading, setLoading] = useState(true); // Track loading state

        // Fetching data from the API only once
        useEffect(() => {
                const fetchOrders = async () => {
                        try {
                                const response = await fetch("/api/dogs"); // Fetch from the correct API endpoint
                                const data = await response.json();

                                // Set the fetched data in state only if it's not already set
                                if (data.length && !orders.length) {
                                        setOrders(data);
                                }
                        } catch (error) {
                                console.error("Error fetching order data:", error);
                        } finally {
                                setLoading(false); // Stop loading once data is fetched
                        }
                };

                fetchOrders(); // Run fetch on mount only
        }, []); // Empty dependency array ensures this runs once

        // Render loading message while fetching data
        if (loading) return <div>Loading...</div>;

        // Find Ibel's order from the fetched data
        const ibelOrder = orders.find((order) => order.dogName === "Ible");

        if (!ibelOrder) return <div>No order found for Ible.</div>; // Handle case if no order for Ibel is found

        // Number of times you want to repeat the "Ibel" order (fixed to 3)
        const repeatCount = 3;

        return (
            <div className="overflow-y-auto max-h-[90vh] p-3">
                    {/* Looping exactly 3 times to show Ibel's order */}
                    {Array.from({ length: repeatCount }).map((_, index) => (
                        <div key={index} className="border p-4 mb-4 rounded-lg shadow-md">
                                <div>
                                        <PrimaryRow dogName={ibelOrder.dogName} status={ibelOrder.status} />
                                </div>
                                <Divider />
                                <div>
                                        <SecondaryRow title="Portions" value={ibelOrder.portions} />
                                </div>
                                <Divider />
                                <div>
                                        <TertiaryRow title="Recipes" value={ibelOrder.recipes} />
                                </div>
                                <Divider />
                                <div>
                                        <QuaternaryRow
                                            title="Delivery Date"
                                            value={ibelOrder.deliveryDate}
                                            order={null}
                                            onOpenModal={null}
                                            isEditing={null}
                                            newValue={null}
                                            setNewValue={null}
                                        />
                                </div>
                        </div>
                    ))}
                    {/* Pass the Ibel order data to the ContentModal */}
                    <ContentModal orderDetails={ibelOrder} />
            </div>
        );
};

export default FutureOrderDetails;
