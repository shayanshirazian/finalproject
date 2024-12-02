"use client";
import React, {useState, useEffect} from "react";
import "../../app/api/dogs/route"
import TabsSwitch from "./components/TabsSwitch";
import BackBtn from "./components/buttons/BackBtn";
import orderDetailCard from "./components/OrderDetailCard";
import UpcomingOrders from "./components/UpcomingOrders";
import OrderDetailsModal from "./components/modals/OrderDetailsModal";
import FutureOrders from "./components/FutureOrders";
import FutureOrderDetails from "./components/modals/ContentModal";

const Profile = () => {
    const [orders, setOrders] = useState([]);
    if (!orders) {
        return <div>Loading...</div>;

    }
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({});

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("/api/dogs");
                if (!response.ok) {
                    throw new Error("Failed to fetch orders");
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
        if (order) {
            setSelectedOrder(order);
            setModalOpen(true);
        }else{
            console.error("Invalid order passed to handleOpenModal");
        }
    };

    const handleCloseModal = () => {
        setSelectedOrder({});
        setModalOpen(false);
    };
    const handleCancelModal = () => {
        setModalOpen(false);
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

                <div className="Upcoming Orders text-gray-600 mt-3 ml-1">
                    <UpcomingOrders orders={orders} handleOpenModal={handleOpenModal}/>

                </div>

                <div>
                    <FutureOrders orders={orders} onOpenModal={handleOpenModal}/>
                </div>

                {/*<div className="text-gray-600 mt-3 ml-1">Future Orders*/}
                {/*<div>*/}
                {/*    {orders.map((order, index) => (*/}
                {/*        <div*/}
                {/*            key={index}>*/}
                {/*            <OrderDetailCard*/}
                {/*                order={order}*/}
                {/*                isEditing={true}*/}
                {/*                onOpenModal={() => handleOpenModal(order)}/>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}

                <OrderDetailsModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onCancel={handleCancelModal}
                    onSave={handleSaveDate}
                    orderDetails={selectedOrder}
                />
            </div>
        </div>

    );
}

export default Profile;