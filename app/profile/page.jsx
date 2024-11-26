"use client";
import React, {useState, useEffect} from "react";
import TabsSwitch from "./components/TabsSwitch";
import BackBtn from "./components/buttons/BackBtn";
import OrderDetailCard from "./components/OrderDetailCard";
import OrderDetailsModal from "./components/modals/OrderDetailsModal";
import UpcomingOrders from "./UpcomingOrders";
import FutureOrderDetails from "./components/modals/ContentModal";

const Profile = () => {
    const [orders, setOrders] = useState([]);
    // State to store the list of orders fetched from the API.
    const [loading, setLoading] = useState(true);
    // State to track whether the orders are being loaded.
    const [error, setError] = useState(null);
    const [isModalUOpen, setModalUOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    // State to control whether the modal is open or closed.
    const [selectedOrder, setSelectedOrder] = useState({});
    // State to store the currently selected order for editing in the modal.

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
                className="InnerContainer flex flex-col p-5 bg-gray-100 border border-gray-300 rounded-3xl w-full max-w-3xl">
                <div className="flex mb-4 items-center">
                    <BackBtn/>
                    <TabsSwitch/>
                </div>
                <div>
                    <UpcomingOrders orders={orders} onOpenModal={handleOpenModal}/>
                    <div>
                        <OrderDetailCard orders={orders} onOpenModal={handleCloseModal}/>
                    </div>
                </div>
                <div>
                    <FutureOrderDetails orders={orders}/>
                    <div>
                        <OrderDetailsModal orders={orders} onOpenModal={handleOpenModal} onCloseModal={handleCloseModal}
                                           onEditOrder={handleSaveDate}/>
                    </div>
                </div>

                    {/*<UpcomingOrders orders={orders} onOpenModalU={handleOpenModal}/>*/}
                    {/*<UpcomingOrders order={orders} onClose={handleCloseModal}/>*/}
                    {/*<UpcomingOrders/>*/}

                    {
                        orders.map((order, index) => (
                            <OrderDetailCard order={order} index={index} isEditing={false}
                                             onOpenModal={handleOpenModal}/>
                        ))
                    }
                <div className="text-gray-600 mt-3 ml-1">Future Orders</div>
                    {
                        orders.map((order, index) => (
                            <OrderDetailCard order={order} index={index} isEditing={true}
                                             onOpenModal={handleOpenModal}/>
                        ))
                    }

                    {/*<OrderDetailsModal*/}
                    {/*    isOpen={isModalOpen}*/}
                    {/*    onClose={handleCloseModal}*/}
                    {/*    orderDetails={selectedOrder}*/}
                    {/*    onSave={handleSaveDate}*/}
                    {/*/>*/}
                    {/* Modal component for editing order details. Receives props to handle opening, closing, and saving. */}

            </div>
        </div>
    );
};

export default Profile;