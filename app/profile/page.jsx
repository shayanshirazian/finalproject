"use client";
import React, {useState, useEffect} from "react";
import "../../app/api/dogs/route"
import TabsSwitch from "./components/TabsSwitch";
import BackBtn from "./components/buttons/BackBtn";
import OrderDetailCard from "../profile/components/OrderDetailCard";
import UpcomingOrders from "./components/UpcomingOrders";
import OrderDetailsModal from "./components/modals/OrderDetailsModal";
// import PrimaryRow from "./components/cartDetails/PrimaryRow";
// import SecondaryRow from "./components/cartDetails/SecondaryRow";
// import TeritaryRow from "./components/cartDetails/TertiaryRow";
// import QuaternaryRow from "./components/cartDetails/QuaternaryRow";
import OpenDetails from "./components/buttons/OpenDetails";

const Profile = () => {
    const [orders, setOrders] = useState([]);
    if (!orders){
        return <div>Loading...</div>;

    }
    console.log(orders);
    // State to store the list of orders fetched from the API.
    const [loading, setLoading] = useState(true);
    // State to track whether the orders are being loaded.
    const [error, setError] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({});

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("/api/dogs");
                // Sends a GET request to the `/api/dogs` endpoint.

                if (!response.ok) {
                    throw new Error("Failed to fetch orders");
                    // Throws an error if the response status is not OK.
                }
                const data = await response.json();
                setOrders(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);
    const handleOpenModal = (order) => {
        if (!order) {
            console.error("order was not found");
            return;
        }
        setSelectedOrder(order);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedOrder({});
    };

    const handleSaveDate = async (dogName, newDate) => {
        try {
            const response = await fetch("/api/dogs", {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({dogName, deliveryDate: newDate}),
            });

            if (!response.ok) {
                throw new Error("Failed to update delivery date.");
            }

            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.dogName === dogName
                        ? {...order, deliveryDate: newDate}
                        : order
                )
            );
            setModalOpen(false);
        } catch (error) {
            console.error(error.message);
        }
    };

    if (loading) return <p className="text-center mt-4">Loading Orders...</p>;
    if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

    return (
        <div className="MainContainer flex items-center bg-green justify-center mt-10 min-h-screen w-full bg-green-50">
            <div
                className="InnerContainer flex flex-col  p-5 bg-gray-100 border border-gray-300 rounded-3xl w-full max-w-3xl">
                <div className="flex mb-4 items-center ">
                    <BackBtn/>
                    <TabsSwitch/>
                </div>
                <div className="Upcoming Orders">
                    <div className="text-gray-600 mt-3 ml-1">
                        {/*<UpcomingOrders />*/}
                        {/*<div className="flex flex-col m-3 p-4 rounded-lg shadow-md border border-grey-200">*/}
                        {/*    <div className="flex items-center justify-between">*/}
                        {/*        <div>*/}
                        {/*            <span className="font-bold">*/}
                        {/*                {orders?.[0, 4]?.deliveryDate}*/}
                        {/*                /!*<QuaternaryRow title={"Delivery Date"} value={orders.deliveryDate} />*!/*/}
                        {/*            </span>*/}
                        {/*            <span className="text-xs text-gray-500 ml-3">*/}
                        {/*                {orders?.[0]?.recipes}*/}
                        {/*                /!*<SecondaryRow title={"Delivery Date"} value={orders.value}/>*!/*/}
                        {/*            </span>*/}
                        {/*            <span className="bg-blue-100 text-blue-500 text-xs rounded-full px-3 py-1 ml-3">*/}
                        {/*                Shipped*/}
                        {/*            </span>*/}
                        {/*            <div>*/}
                        {/*                <div className="text-gray-400  mt-2">*/}
                        {/*                    <span>For: </span>*/}
                        {/*                    <span className="text-gray-500 text-xs mt-2">*/}
                        {/*                        {orders.map((dog) => dog.dogName).join(", ")}*/}
                        {/*                    </span>*/}
                        {/*                    /!*<span> <PrimaryRow name={orders.dogName}/></span>*!/*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="mr-3">*/}
                        {/*            <OpenDetails onclick={() => handleOpenModal(order)} />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <UpcomingOrders orders={orders} onOpenModal={handleOpenModal}/>
                  </div>

                <div className="text-gray-600 mt-3 ml-1">Future Orders

                    <div>
                        {/* Map over the orders array */}
                        {orders.map((order, index) => (
                            <div
                                key={index} // Use a unique ID as the key

                            >

                                <OrderDetailCard
                                   // Use a unique property like order.id, or fallback to index
                                    order={order}
                                    isEditing={true}
                                    onOpenModal={() => handleOpenModal(order)} // Pass the specific order to the modal
                                />
                            </div>

                        ))}
                    </div>

                    {/* Render the modal once, outside the loop */}
                    <OrderDetailsModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        orderDetails={selectedOrder} // Pass the selected order details
                        onSave={handleSaveDate}
                    />

                    {/*    <OrderDetailCard order={orders[0]} onOpenModal={handleCloseModal}/>*/}
                    {/*    <OrderDetailCard order={orders[1]} onOpenModal={handleCloseModal}/>*/}
                    {/*    <OrderDetailCard order={orders[2]} onOpenModal={handleCloseModal}/>*/}
                    {/*    <OrderDetailCard order={orders[3]} onOpenModal={handleCloseModal}/>*/}
                    {/*    <OrderDetailCard order={orders[4]} onOpenModal={handleCloseModal}/>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <FutureOrderDetails orders={orders}/>*/}
                    {/*    <div>*/}
                    {/*        <OrderDetailsModal orders={orders} onOpenModal={handleOpenModal} onCloseModal={handleCloseModal}*/}
                    {/*                           onEditOrder={handleSaveDate}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <UpcomingOrders order={orders} onClose={handleCloseModal}/>
                    <UpcomingOrders/>

                    {/* Modal component for editing order details. Receives props to handle opening, closing, and saving. */}
                </div>
            </div>
        </div>
    );
}
export default Profile;