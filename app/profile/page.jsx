"use client"
import React, {useState} from 'react';
import TabsSwitch from "./components/TabsSwitch";
import OrderDetailsModal from "./components/OrderDetailsModal";


const Profile = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({});

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


    return (// box position
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
                            <span className="w-16">2 Chicken, 4 Beef</span>
                            {/*status*/}
                            <span
                                className="bg-blue-100 text-blue-500 px-2 text-xs ml-5 rounded-full text-xxs ">Shipped</span>
                            <button className="text-lg font-extrabold text-green-700 ml-28 flex justify-between"
                                    onClick={handleOpenModal}>
                                {`>`}
                            </button>
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
                <div className="text-gray-600 mt-3 ml-1"> Future Orders</div>
                <div>
                    {/*each dog*/}
                    {/*box*/}
                    <div className="dogboxes rounded-lg  border border-grey-200 m-3 ">

                        {/*orderDetailStyle*/}
                        {/*name and status*/}
                        <div className="flex justify-between m-2">

                            {/*dog name*/}
                            <span className="text-green-900  mt-2 font-bold">Ibel</span>

                            {/*status*/}
                            <span
                                className="bg-blue-100 text-blue-500  text-xs rounded-full text-xxs px-3 py-1">
                            Shipped
                        </span>
                        </div>

                        {/*line*/}
                        <div className="m-3 border-t border-gray-300"></div>
                        {/*portions*/}
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500">Portions: </span>
                            <span className="text-green-700 ">Full meal</span>
                        </div>

                        {/*line*/}
                        <div className="m-3 border-t border-gray-300"></div>

                        {/*status*/}
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500">Recipes:</span>
                            <span className="text-green-700 ">18 Chicken, 4 Beef, 8 Salmon</span>

                        </div>

                        {/*line*/}
                        <div className="m-3 border-t border-gray-300"></div>
                        <div className="flex justify-between items-center m-2">
                            <div className="flex items-center">
                                <span className="text-gray-500 mr-48 ">Delivery Date:</span>
                                <span className="text-green-700 font-bold">06/09/2024</span>
                            </div>
                            <img src="/Edit.svg" alt="editbtn" className="h-3.5"/>
                        </div>

                    </div>
                </div>

                <div>
                    {/*each dog*/}
                    {/*box*/}
                    <div className="dogboxes rounded-lg  border border-grey-200 m-3 ">

                        {/*orderDetailStyle*/}
                        {/*name and status*/}
                        <div className="flex justify-between m-2">

                            {/*dog name*/}
                            <span className="text-green-900  mt-2 font-bold">Ibel</span>

                            {/*status*/}
                            <span
                                className="bg-blue-100 text-blue-500  text-xs rounded-full text-xxs px-3 py-1">
                            Shipped
                        </span>
                        </div>

                        {/*line*/}
                        <div className="m-3 border-t border-gray-300"></div>
                        {/*portions*/}
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500">Portions: </span>
                            <span className="text-green-700 ">Full meal</span>
                        </div>

                        {/*line*/}
                        <div className="m-3 border-t border-gray-300"></div>

                        {/*status*/}
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500">Recipes:</span>
                            <span className="text-green-700 ">18 Chicken, 4 Beef, 8 Salmon</span>
                        </div>

                        {/*line*/}
                        <div className="m-3 border-t border-gray-300"></div>
                        <div className="flex justify-between items-center m-2">
                            <div className="flex items-center">
                                <span className="text-gray-500 mr-48 ">Delivery Date:</span>
                                <span className="text-green-700 font-bold">06/09/2024</span>
                            </div>
                            <img src="/Edit.svg" alt="editbtn" className="h-3.5"/>
                        </div>
                    </div>
                </div>
                <div>
                    {/*each dog*/}
                    {/*box*/}
                    <div className="dogboxes rounded-lg  border border-grey-200 m-3 ">

                        {/*orderDetailStyle*/}
                        {/*name and status*/}
                        <div className="flex justify-between m-2">

                            {/*dog name*/}
                            <span className="text-green-900  mt-2 font-bold">Ibel</span>

                            {/*status*/}
                            <span
                                className="bg-blue-100 text-blue-500  text-xs rounded-full text-xxs px-3 py-1">
                            Shipped
                        </span>
                        </div>

                        {/*line*/}
                        <div className="m-3 border-t border-gray-300"></div>
                        {/*portions*/}
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500">Portions: </span>
                            <span className="text-green-700 ">Full meal</span>
                        </div>

                        {/*line*/}
                        <div className="m-3 border-t border-gray-300"></div>

                        {/*status*/}
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500">Recipes:</span>
                            <span className="text-green-700 ">18 Chicken, 4 Beef, 8 Salmon</span>
                        </div>

                        {/*line*/}
                        <div className="m-3 border-t border-gray-300"></div>
                        <div className="m-3 border-t border-gray-300"></div>
                        <div className="flex justify-between items-center m-2">
                            <div className="flex items-center">
                                <span className="text-gray-500 mr-48 ">Delivery Date:</span>
                                <span className="text-green-700 font-bold">06/09/2024</span>
                            </div>
                            <img src="/Edit.svg" alt="editbtn" className="h-3.5"/>
                        </div>
                    </div>
                </div>

            </div>
            <OrderDetailsModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                orderDetails={selectedOrder}
            />
        </div>);
};

export default Profile;