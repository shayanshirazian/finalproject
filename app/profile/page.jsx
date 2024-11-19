"use client"
import React, {useState, useEffect} from 'react';
import TabsSwitch from "./components/TabsSwitch";
import OrderDetailsModal from "./components/OrderDetailsModal";


const Profile = () => {
    const [orders, setOrders] = useState([]);
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
                setOrders(data); // Save the data
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, [])


    const handleOpenModal = () => {
        setSelectedOrder(
            [
                {
                    dogName: "Cola",
                    recipes: '2 Chicken, 4 Beef',
                    portions: 'Full meal',
                    deliveryDate: '04/09/2024',
                    status: 'Shipped',
                },
                {
                    dogName: "Cola",
                    recipes: '2 Chicken, 4 Beef',
                    portions: 'Full meal',
                    deliveryDate: '04/09/2024',
                    status: 'Shipped',
                },
                {
                    dogName: "Cola",
                    recipes: '2 Chicken, 4 Beef',
                    portions: 'Full meal',
                    deliveryDate: '04/09/2024',
                    status: 'Shipped',
                }
            ]);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedOrder({});
    };

    if (loading) return <p className="text-center mt-4">Loading Orders...</p>;
    if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;


    return (
        // box position
        <div className="flex items-center justify-center mt-10 min-h-72 w-full  ">
            {/*box setup*/}
            <div
                className="flex flex-wrap flex-col p-5 min-w-64 min-h-64 bg-gray-100 border border-gray-300 rounded-3xl w-1/3 text-xs ">
                {/*back btn , orders/history switch*/}
                <div className="flex  mb-4">
                    {/*back btn*/}
                    <button className="text-xl text-green-700 mr-28">
                        <img width="10px" src="/left-arrow.svg" alt="back btn"/>
                    </button>
                    {/*orders/history switch*/}
                    <TabsSwitch/>
                </div>

                {/*upcoming orders*/}
                <div className="text-gray-600 mt-3 ml-1"> Upcoming Orders
                    {/*card details*/}
                    <div
                        className="flex flex-col m-3 p-4 rounded-lg shadow-md border border-grey-200 text-xxs text-gray-500 ">
                        {/*left side*/}
                        <div className="flex items-center ">
                            {/*date*/}
                            <span className="text-sm text-black mr-4">04/09/2024</span>
                            {/*order*/}
                            <span className="w-16 mr-20">2 Chicken, 4 Beef</span>
                            {/*status*/}
                            <span
                                className="bg-blue-100 text-blue-500 px-2 text-xs -ml-10 rounded-full text-xxs ">Shipped</span>
                            <button className="text-lg font-extrabold text-green-700 ml-48  flex justify-between"
                                    onClick={handleOpenModal}>
                                {`>`}
                            </button>
                        </div>
                        <div className="text-gray-500 text-xxs">
                            <span>For: </span>
                            <span className="text-gray-600 text-xxs">Rocky, Ible, Toflie, Res</span>
                        </div>
                        {/*detail btn*/}
                        <div className="">
                        </div>
                    </div>
                </div>
                {/*future orders*/}
                <div className="text-gray-600 mt-3 ml-1"> Future Orders</div>
                {orders.map((order, index) => (
                    <div key={index} className="dogboxes rounded-lg shadow-md border border-gray-200 m-3">
                        <div className="flex justify-between m-2">
                            <span className="text-green-900 mt-2 ml-2 font-bold">
                                {order.dogName}
                            </span>
                            <span
                                className={`${order.status === "Shipped" ? "bg-blue-100 text-blue-500" : "bg-yellow-100 text-yellow-500"} text-xs rounded-full text-xxs px-3 py-1`}
                            >
                {order.status}
              </span>
                        </div>
                        <div className="m-3 border-t border-gray-300"></div>
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500 ml-3">Portions: </span>
                            <span className="text-green-700 mr-3">{order.portions}</span>
                        </div>
                        <div className="m-3 border-t border-gray-300"></div>
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500 ml-3">Recipes:</span>
                            <span className="text-green-700 mr-3">{order.recipes}</span>
                        </div>
                        <div className="m-3 border-t border-gray-300"></div>
                        <div className="flex justify-between items-center m-2">
                            <div className="flex items-center">
                                <span className="text-gray-500 mr-72 ml-3">Delivery Date:</span>
                                <span className="text-green-700 font-bold">{order.deliveryDate}</span>
                            </div>
                            <img
                                src="/Edit.svg"
                                alt="editbtn"
                                className="h-3.5 cursor-pointer ml-1 mr-3"
                                onClick={() => handleOpenModal(order)}
                            />
                        </div>

                    </div>))}
            </div>
            <OrderDetailsModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                orderDetails={selectedOrder}
            />
        </div>
    )
}
export default Profile;
