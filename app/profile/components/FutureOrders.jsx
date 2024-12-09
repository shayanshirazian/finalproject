import React from "react";
import OrderDetailCard from "./OrderDetailCard";

const FutureOrders = ({ orders, onOpenModal }) => {
  if (!orders || !Array.isArray(orders)) {
    return <p>No orders available.</p>;
  }

  return (
    <>
      <div className="text-gray-600 mt-3 ml-1">{`Future Orders`}</div>
      {orders.map((order, index) => (
        <div key={index}>
          <OrderDetailCard order={order} onOpenModal={onOpenModal} hasEdit={true} />
        </div>
      ))}
    </>
  );
};

export default FutureOrders;
