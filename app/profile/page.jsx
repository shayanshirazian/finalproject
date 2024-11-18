"use client"
import React, {useState} from 'react';

import TabsSwitch from "./components/TabsSwitch";


import OrderDetailsModal from "./components/OrderDetailsModal";


const Profile = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({});

    const handleOpenModal = () => {
        setSelectedOrder({
            dogNames: ["Cola", "Ible", "Rocky", "toflie", "Res"],
            recipes: '2 Chicken, 4 Beef',
            portions: 'Full meal',
            deliveryDate: '04/09/2024',
            status: 'Shipped',
        });
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedOrder({});
    };


    return (// box position
        <div className="flex items-center justify-center min-h-72 w-full h-60 ">
            {/*box setup*/}
            <div
                className="flex flex-wrap flex-col p-5 min-w-64 min-h-64 bg-gray-100 border border-gray-300 rounded-3xl w-1/3 text-xs ">
                {/*back btn , orders/history switch*/}
                <div className="flex justify-items-center-center mb-4">
                    {/*back btn*/}
                    <button className="text-xl text-green-700 mr-4 float-right">
                        <img width="10px" src="/left-arrow.svg" alt="back btn"/>
                    </button>
                    {/*orders/history switch*/}
                    <TabsSwitch/>
                </div>
                {/*upcoming orders*/}
                <div className="text-gray-600 "> Upcoming Orders
                    {/*card details*/}
                    <div
                        className="flex flex-col m-3 p-4 rounded-lg shadow-md border border-grey-200 text-xxs text-gray-500 ">
                        {/*left side*/}
                        <div className="flex items-center ">
                            {/*date*/}
                            <span className="text-sm text-black mr-4">04/09/2024</span>
                            {/*order*/}
                            <span className="">2 Chicken, 4 Beef</span>
                            {/*status*/}
                            <span
                                className="bg-blue-100 text-blue-500 px-2 text-xs ml-3 rounded-full text-xxs ">Shipped</span>
                            <button className="text-lg text-green-700 mr-4 flex justify-between"
                                    onClick={handleOpenModal}
                            >{`>`}</button>

                        </div>

                        <div className="text-gray-500 text-xxs">
                            <span>For: </span>
                            <span className="text-gray-600 text-xxs">Rock, Ible, Toflie, Res</span>
                        </div>
                        {/*detail btn*/}
                        <div className="">
                        </div>

                    </div>


                </div>
                {/*future orders*/}
                <div className="text-gray-600"> Future Orders</div>
            </div>
            <OrderDetailsModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                orderDetails={selectedOrder}
            />
        </div>);
};

export default Profile;