"use client"
import React from 'react';


const OrderDetailsModal = ({isOpen, onClose, orderDetails}) => {
    if (!isOpen) return null;

    return (
        // other Opened Box
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">

            {/*box Style*/}
            <div className="bg-white rounded-xxl shadow-lg w-3/4 max-w-lg p-3">

                {/*header*/}
                <div>
                    {/*title*/}
                    <span className="text-sm ml-3 mb-2">Order Details</span>
                    {/*close btn*/}
                    <button className="mr-3 float-right" onClick={onClose}>✖</button>
                </div>

                {/*line*/}
                <div className="m-2 border-t border-gray-300"></div>

                {/*each dog*/}
                {/*box*/}
                <div className="rounded-lg  border border-grey-200 m-3 ">

                    {/*orderDetailStyle*/}
                    {/*name and status*/}
                    <div className="flex justify-between m-2">

                        {/*dog name*/}
                        <span className="text-green-900  font-bold">{orderDetails.dogNames[1]} </span>

                        {/*status*/}
                        <span
                            className="bg-blue-100 text-blue-500  text-xs rounded-full text-xxs px-3 py-1">
                            {orderDetails.status}
                        </span>
                    </div>

                    {/*line*/}
                    <div className="m-3 border-t border-gray-300"></div>
                   {/*portions*/}
                    <div className="flex justify-between m-2">
                        <span className="text-gray-500">Portions: </span>
                        <span className="text-green-700 ">{orderDetails.portions}</span>
                    </div>

                    {/*line*/}
                    <div className="m-3 border-t border-gray-300"></div>

                    {/*status*/}
                    <div className="flex justify-between m-2">
                        <span className="text-gray-500">Status:</span>
                        <span className="text-green-700 ">{orderDetails.recipes}</span>
                    </div>

                    {/*line*/}
                    <div className="m-3 border-t border-gray-300"></div>
                    <div className="flex justify-between m-2">
                        <span className="text-gray-500">Delivery Date:</span>
                        <span className="text-green-700 ">{orderDetails.deliveryDate}</span>
                    </div>
                </div>

                {/*each dog*/}
                {/*box*/}
                <div className="rounded-lg  border border-grey-200 m-3 ">

                    {/*orderDetailStyle*/}
                    {/*name and status*/}
                    <div className="flex justify-between m-2">

                        {/*dog name*/}
                        <span className="text-green-900  font-bold">{orderDetails.dogNames[1]} </span>

                        {/*status*/}
                        <span
                            className="bg-blue-100 text-blue-500  text-xs rounded-full text-xxs px-3 py-1">
                            {orderDetails.status}
                        </span>
                    </div>

                    {/*line*/}
                    <div className="m-3 border-t border-gray-300"></div>
                    {/*portions*/}
                    <div className="flex justify-between m-2">
                        <span className="text-gray-500">Portions: </span>
                        <span className="text-green-700 ">{orderDetails.portions}</span>
                    </div>

                    {/*line*/}
                    <div className="m-3 border-t border-gray-300"></div>

                    {/*status*/}
                    <div className="flex justify-between m-2">
                        <span className="text-gray-500">Status:</span>
                        <span className="text-green-700 ">{orderDetails.recipes}</span>
                    </div>

                    {/*line*/}
                    <div className="m-3 border-t border-gray-300"></div>
                    <div className="flex justify-between m-2">
                        <span className="text-gray-500">Delivery Date:</span>
                        <span className="text-green-700 ">{orderDetails.deliveryDate}</span>
                    </div>
                </div>

                {/*each dog*/}
                {/*box*/}
                <div className="rounded-lg  border border-grey-200 m-3 ">

                    {/*orderDetailStyle*/}
                    {/*name and status*/}
                    <div className="flex justify-between m-2">

                        {/*dog name*/}
                        <span className="text-green-900  font-bold">{orderDetails.dogNames[1]} </span>

                        {/*status*/}
                        <span
                            className="bg-blue-100 text-blue-500  text-xs rounded-full text-xxs px-3 py-1">
                            {orderDetails.status}
                        </span>
                    </div>

                    {/*line*/}
                    <div className="m-3 border-t border-gray-300"></div>
                    {/*portions*/}
                    <div className="flex justify-between m-2">
                        <span className="text-gray-500">Portions: </span>
                        <span className="text-green-700 ">{orderDetails.portions}</span>
                    </div>

                    {/*line*/}
                    <div className="m-3 border-t border-gray-300"></div>

                    {/*status*/}
                    <div className="flex justify-between m-2">
                        <span className="text-gray-500">Status:</span>
                        <span className="text-green-700 ">{orderDetails.recipes}</span>
                    </div>

                    {/*line*/}
                    <div className="m-3 border-t border-gray-300"></div>
                    <div className="flex justify-between m-2">
                        <span className="text-gray-500">Delivery Date:</span>
                        <span className="text-green-700 ">{orderDetails.deliveryDate}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default OrderDetailsModal;
