import React, { useState, useEffect } from "react";
import HeaderModal from "../cartDetails/HeaderModal";
import ActionsModal from "./ActionsModal";
import Divider from "../cartDetails/Divider";

const OrderDetailsModal = ({ isOpen, onClose, orderDetails, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDate, setNewDate] = useState(orderDetails?.deliveryDate || "");

  useEffect(() => {
    if (orderDetails) {
      setNewDate(orderDetails.deliveryDate || "");
    }
  }, [orderDetails]);

  if (!isOpen || !orderDetails) return null;

  const handleSave = () => {
    if (!newDate) return;
    onSave(orderDetails.dogName, newDate);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewDate(orderDetails.deliveryDate);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xxl shadow-lg w-3/4 max-w-lg p-3 relative">
        <HeaderModal title="Order Details" onClose={onClose} />
        <Divider />
        <div className="DateEditing p-4">
          {isEditing ? (
            <div>
              <label className=" text-sm font-medium text-gray-700">
                Delivery Date:
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
              />
            </div>
          ) : (
            <div className=" flex justify-between mx-3 text-lg font-semibold ">
              <span className="text-gray-500">Delivery Date:</span>
              <span className="text-green-700">
                {orderDetails.deliveryDate}
              </span>
            </div>
          )}
        </div>

        <ActionsModal
          isEditing={isEditing}
          onSave={handleSave}
          onCancel={handleCancel}
          onEdit={() => setIsEditing(true)}
        />
      </div>
    </div>
  );
};

export default OrderDetailsModal;
