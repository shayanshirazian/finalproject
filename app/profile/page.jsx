"use client";
// Indicates that this component runs on the client-side in Next.js.

import React, { useState, useEffect } from "react";
// Imports React, the `useState` hook for managing state, and `useEffect` for performing side effects like fetching data.

import TabsSwitch from "./components/TabsSwitch";
import OrderDetailsModal from "./components/OrderDetailsModal";
// Imports the `TabsSwitch` component for toggling between tabs and `OrderDetailsModal` for showing and editing order details.

const Profile = () => {
  const [orders, setOrders] = useState([]);
  // State to store the list of orders fetched from the API.

  const [loading, setLoading] = useState(true);
  // State to track whether the data is still being fetched.

  const [error, setError] = useState(null);
  // State to store any error that occurs during data fetching.

  const [isModalOpen, setModalOpen] = useState(false);
  // State to control whether the modal is open or closed.

  const [selectedOrder, setSelectedOrder] = useState({});
  // State to store details of the currently selected order for editing.

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/dogs");
        // Fetches order data from the `/api/dogs` endpoint.

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
          // Throws an error if the API response is not successful.
        }

        const data = await response.json();
        // Converts the API response to JSON format.

        setOrders(data);
        // Saves the fetched orders into the `orders` state.
      } catch (err) {
        setError(err.message);
        // Sets the error state with the error message.
      } finally {
        setLoading(false);
        // Stops the loading spinner once the API call is complete.
      }
    };

    fetchOrders();
    // Executes the data fetching function on component mount.
  }, []);
  // Empty dependency array ensures this effect runs only once, like `componentDidMount`.

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    // Sets the currently selected order for editing.

    setModalOpen(true);
    // Opens the modal.
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // Closes the modal.

    setSelectedOrder({});
    // Resets the `selectedOrder` state to an empty object.
  };

  const handleSaveDate = async (dogName, newDate) => {
    // Function to handle saving an updated delivery date to the backend.
    try {
      const response = await fetch("/api/dogs", {
        method: "PUT",
        // Makes a `PUT` request to update the backend.

        headers: { "Content-Type": "application/json" },
        // Specifies the content type as JSON.

        body: JSON.stringify({ dogName, deliveryDate: newDate }),
        // Sends the `dogName` and the updated `deliveryDate` in the request body.
      });

      if (!response.ok) {
        throw new Error("Failed to update delivery date.");
        // Throws an error if the request fails.
      }

      const updatedOrder = await response.json();
      // Parses the response JSON for the updated order.

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.dogName === dogName
            ? { ...order, deliveryDate: newDate }
            : // Updates the `deliveryDate` of the matching order.
              order
        )
      );

      setModalOpen(false);
      // Closes the modal after saving changes.
    } catch (error) {
      console.error(error.message);
      // Logs any error that occurs.
    }
  };

  if (loading) return <p className="text-center mt-4">Loading Orders...</p>;
  // Displays a loading message if `loading` is true.

  if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;
  // Displays the error message if `error` is not null.

  return (
    <div className="flex items-center bg-green justify-center mt-10 min-h-screen w-full bg-green-50">
      {/* Main container for the profile page layout. */}

      <div className="flex flex-col p-5 bg-gray-100 border border-gray-300 rounded-3xl w-full max-w-3xl">
        {/* Box containing the profile content styled with Tailwind CSS. */}

        <div className="flex mb-4 items-center ">
          {/* Row for the back button and tab switcher. */}

          <button className="text-green-700 m-5 ">
            <img width="20px" src="/left-arrow.svg" alt="back btn" />
            {/* Back button with an SVG icon. */}
          </button>

          <TabsSwitch />
          {/* Component for switching between different tabs. */}
        </div>

        {/* Upcoming Orders */}
        <div className="text-gray-600 mt-3 ml-1">
          Upcoming Orders
          <div className="flex flex-col m-3 p-4 rounded-lg shadow-md border border-grey-200">
            <div className="flex items-center justify-between">
              <span className="text-xl text-black mr-4">04/09/2024</span>
              <span className="w-40 ">2 Chicken, 4 Beef</span>
              <span className="bg-blue-100 text-blue-500 px-2 text-xs rounded-full">
                Shipped
              </span>
              <button
                className="text-lg font-extrabold text-green-700"
                onClick={handleOpenModal}
              >
                {`>`}
              </button>
            </div>
            <div className="text-gray-500 text-xs mt-2">
              <span>For: </span>
              <span className="text-gray-600 text-xs">
                Rocky, Ible, Toflie, Res
              </span>
            </div>
          </div>
        </div>

        {/* Future Orders */}
        <div className="text-gray-600 mt-3 ml-1">Future Orders</div>
        {/* Section header for future orders. */}

        {orders.map((order, index) => (
          // Loops through the `orders` array and renders a card for each order.
          <div
            key={index}
            className="dogboxes rounded-lg shadow-md border border-gray-200 m-3"
          >
            <div className="flex justify-between m-2">
              <span className="text-green-900 mt-2 ml-2 font-bold">
                {order.dogName}
              </span>
              <span
                className={`${
                  order.status === "Shipped"
                    ? "bg-blue-100 text-blue-500"
                    : "bg-yellow-100 text-yellow-500"
                } text-xs rounded-full px-3 py-1`}
              >
                {order.status}
              </span>
            </div>

            <div className="m-3 border-t border-gray-300"></div>
            {/* Divider line. */}

            <div className="flex justify-between m-2">
              <span className="text-gray-500 ml-3">Portions: </span>
              <span className="text-green-700 mr-3">{order.portions}</span>
            </div>

            <div className="m-3 border-t border-gray-300"></div>

            <div className="flex justify-between m-2">
              <span className="text-gray-500 ml-3">Recipes:</span>
              <span className="text-green-700 mr-3">{order.recipes}</span>
            </div>

            <div className="m-3 border-t border-gray-300"></div>

            <div className="flex justify-between  m-2">
              <div className="flex items-center justify-around">
                <span className="text-gray-500 mr-96 ml-3">Delivery Date:</span>
                <span className="text-green-700 font-bold ml-20">
                  {order.deliveryDate}
                </span>
              </div>

              <img
                src="/Edit.svg"
                alt="editbtn"
                className="h-3.5 cursor-pointer ml-1 mr-3"
                onClick={() => handleOpenModal(order)}
                // Opens the modal and passes the clicked order to `handleOpenModal`.
              />
            </div>
          </div>
        ))}
      </div>

      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        orderDetails={selectedOrder}
        onSave={handleSaveDate}
        // Passes functions and the selected order to the modal as props.
      />
    </div>
  );
};

export default Profile;
// Exports the `Profile` component to be used in other parts of the application.

