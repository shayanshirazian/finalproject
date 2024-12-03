import React from 'react';
import Divider from "./cartDetails/Divider";

const DataDetail = ({orders, isEditing,onOpenModal}) => {
    return (
        <>
            {Array.isArray(orders) &&
                orders.map((order, index) => (
                    <div
                        key={index}
                        className="dogboxes rounded-lg shadow-md border border-gray-200 m-3">
                        <div className="flex justify-between m-2">
                        <span className="text-green-900 mt-2 ml-2 font-bold">
                            {order.dogName}
                        </span>
                            <span
                                className="bg-blue-100 text-blue-500 text-xs rounded-full px-3 py-2">
                            {order.status}
                        </span>
                        </div>

                        <Divider/>

                        <div className="flex justify-between m-2">
                            <span className="text-gray-500 ml-3">Portions: </span>
                            <span className="text-green-700 mr-3">{order.portions}</span>
                        </div>

                        <Divider/>

                        <div className="flex justify-between items-center m-2">
                            <span className="text-gray-500 ml-3">Recipes:</span>
                            <span className="text-green-700 mr-3">{order.recipes}</span>
                        </div>

                        <Divider/>

                        <div className="flex justify-between m-2">
                            <span className="text-gray-500 w-[150px] ml-3">Delivery Date:</span>
                            <div className="flex items-center">
                            <span className="text-green-700 font-bold w-[120px] text-center flex flex-row justify-end mr-2">
                                {order.deliveryDate}
                                {/*{isEditing?*/}
                                {/*    <img*/}
                                {/*        src="/Edit.svg"*/}
                                {/*        alt="editbtn"*/}
                                {/*        className="h-5 cursor-pointer mx-2 "*/}
                                {/*        onClick={() => onOpenModal(order)} // Check if onOpenModal is a function*/}
                                {/*    />:*/}
                                {/*    false*/}
                                {/*}*/}
                            </span>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default DataDetail;
