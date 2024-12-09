/* eslint-disable @next/next/no-img-element */
import React from "react";
import Divider from "./cartDetails/Divider";

const OrderDetailCard = ({ order }) => {
  return (
    <div className="dogboxes  m-3">
      <div className="flex justify-between m-2">
        <span className="text-green-900 mt-2 ml-2 font-bold">
          {order.dogName}
        </span>
        <span className="bg-blue-100 text-blue-500 text-xs rounded-full px-3 py-2">
          {order.status}
        </span>
      </div>

      <Divider />

      <div className="flex justify-between m-2">
        <span className="text-gray-500 ml-3">Portions: </span>
        <span className="text-green-700 mr-3">{order.portions}</span>
      </div>

      <Divider />

      <div className="flex justify-between items-center m-2">
        <span className="text-gray-500 ml-3">Recipes:</span>
        <span className="text-green-700 mr-3">{order.recipes}</span>
      </div>

      <Divider />

      <div className="flex justify-between m-2">
        <span className="text-gray-500 w-[150px] ml-3">Delivery Date:</span>
        <div className="flex items-center">
          <span className="text-green-700 font-bold w-[120px] text-center flex flex-row justify-end mr-3">
            {order.deliveryDate}
          </span>
        </div>
      </div>
      <Divider/>
    </div>
  );
};
export default OrderDetailCard;
