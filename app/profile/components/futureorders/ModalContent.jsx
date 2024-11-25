import React from "react";
import Divider from "../Divider";

const UpcomingOrderDetails = ({ orderDetails, isEditing, newDate, setNewDate }) => (
    <div className="overflow-y-auto max-h-[90vh] p-3">
        {/* Dog Name */}
        <div className="flex justify-center m-5 -mt-4">
            <span className="text-green-700 font-extrabold">
                {orderDetails.dogName}
            </span>
        </div>

        {/* Portions */}
        <div className="flex justify-between">
            <span className="text-gray-500">Portions:</span>
            <span className="text-green-700">{orderDetails.portions}</span>
        </div>
        <Divider />

        {/* Recipes */}
        <div className="flex justify-between">
            <span className="text-gray-500">Recipes:</span>
            <span className="text-green-700">{orderDetails.recipes}</span>
        </div>
        <Divider />

        {/* Delivery Date */}
        <div className="flex justify-between items-center">
            <span className="text-gray-500">Delivery Date:</span>
            {isEditing ? (
                <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="ml-3 border rounded px-2 py-1 text-green-700"
                />
            ) : (
                <span className="text-green-700 font-bold ml-3">
                    {orderDetails.deliveryDate}
                </span>
            )}
        </div>
    </div>
);

export default UpcomingOrderDetails;
