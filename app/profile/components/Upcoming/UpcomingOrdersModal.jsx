import React from "react";
import HeaderModal from "../cartDetails/HeaderModal";
import Divider from "../cartDetails/Divider";
import OrderDetailCard from "../cartDetails/OrderDetailCard";

const OrderDetailsModal = ({ isOpen, orders, onOpenModal, onClose }) => {
  if (!isOpen || !orders) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="max-h-[90vh] overflow-y-auto bg-white rounded-xxl shadow-lg w-3/4 max-w-lg p-3 relative">
        <HeaderModal title="Order Details" onClose={onClose} />
        <Divider />
        {orders.map((order, index) => (
          <div key={index}>
            <OrderDetailCard
              order={order}
              onOpenModal={onOpenModal}
              hasEdit={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsModal;
