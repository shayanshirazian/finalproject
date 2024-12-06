import React, { useEffect, useState } from "react";
import OrderDetailCard from "../OrderDetailCard";

const ContentModal = ({order,onOpenModal} ) => {
  // State to store the orders fetched from the API
  const [orders, setOrders] = useState([]); // <-- Define the orders state here
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetching data from the API only once
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/dogs"); // Fetch from the correct API endpoint
        const data = await response.json();

        // Set the fetched data in state only if it's not already set
        if (data.length && !orders.length) {
          setOrders(data);
        }
      } catch (error) {
        console.error("Error fetching order data:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchOrders(); // Run fetch on mount only
  }, []); // Empty dependency array ensures this runs once

  // Render loading message while fetching data
  if (loading) return <div>Loading...</div>;

  return (
    <div className="overflow-y-auto max-h-[90vh] p-3">

      <OrderDetailCard order={order} onOpenModal={onOpenModal}/>
    </div>
  );
};

export default ContentModal;