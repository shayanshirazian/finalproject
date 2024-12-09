import React from "react";
import OrderDetailCard from "./OrderDetailCard";
import EditPenBtn from "./buttons/EditPenBtn";

const FutureOrders = ({ orders, onOpenModal }) => {
  if (!orders || !Array.isArray(orders)) {
    return <p>No orders available.</p>;
  }

  const handleOpenModal = (order) => {
    onOpenModal(order);
  };

  return (
    <>
      <div className="text-gray-600 mt-3 ml-1">{`Future Orders`}</div>
      {orders.map((order, index) => (
        <div key={index}>
          <OrderDetailCard
            order={order}
            onOpenModal={onOpenModal}
            index={index}
          />
          <EditPenBtn
            order={order}
            isEdit={true}
            handleOpenModal={handleOpenModal}
          />
        </div>
      ))}
    </>
  );
};

export default FutureOrders;
