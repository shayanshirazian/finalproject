import React, { useEffect, useState } from "react";
import Divider from "../cartDetails/Divider";
import PrimaryRow from "../cartDetails/PrimaryRow";
import SecondaryRow from "../cartDetails/SecondaryRow";
import TertiaryRow from "../cartDetails/TertiaryRow";
import QuaternaryRow from "../cartDetails/QuaternaryRow";
import ContentModal from "../modals/ContentModal";

const ContentModel = () => {
        const [orders, setOrders] = useState([]);
        const [loading, setLoading] = useState(true);

        // Fetching data from the API only once
        useEffect(() => {
                const fetchOrders = async () => {
                        try {
                                const response = await fetch("/api/dogs");
                                const data = await response.json();

                                if (data.length && !orders.length) {
                                        setOrders(data);
                                }
                        } catch (error) {
                                console.error("Error fetching order data:", error);
                        } finally {
                                setLoading(false); // Stop loading once data is fetched
                        }
                };

                fetchOrders();
        }, []);

        if (loading) return <div>Loading...</div>;


        const ibelOrder = orders.find((order) => order.dogName === "Ible");

        if (!ibelOrder) return <div>No order found for Ible.</div>; // Handle case if no order for Ibel is found

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
                    <ContentModal orderDetails={ibelOrder} />
            </div>
        );
};

export default ContentModel;
