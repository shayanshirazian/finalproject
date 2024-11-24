"use client";
import React, {useState, useEffect} from "react";
import TabsSwitch from "./components/TabsSwitch";
// Imports the `TabsSwitch` component, used for toggling between tabs.
import OrderDetailsModal from "./components/OrderDetailsModal";
// Imports the `OrderDetailsModal` component, used for displaying and editing order details.
import TabUpcomingOrders from "./components/TabUpcomingOrders";
// Imports the `TabUpcomingOrders` component to handle and display upcoming orders.
import TabFutureOrders from "./components/TabFutureOrders";
// Imports the `TabFutureOrders` component to handle and display future orders.

const Profile = () => {
    const [orders, setOrders] = useState([]);
    // State to store the list of orders fetched from the API.

    const [loading, setLoading] = useState(true);
    // State to track whether the orders are being loaded.

    const [error, setError] = useState(null);
    // State to track any errors that occur during data fetching.

    const [isModalOpen, setModalOpen] = useState(false);
    // State to control whether the modal is open or closed.

    const [selectedOrder, setSelectedOrder] = useState({});
    // State to store the currently selected order for editing in the modal.

    useEffect(() => {
        // Fetches data from the API when the component mounts.
        const fetchOrders = async () => {
            try {
                const response = await fetch("/api/dogs");
                // Sends a GET request to the `/api/dogs` endpoint.

                if (!response.ok) {
                    throw new Error("Failed to fetch orders");
                    // Throws an error if the response status is not OK.
                }

                const data = await response.json();
                // Parses the JSON response.

                setOrders(data);
                // Updates the `orders` state with the fetched data.
            } catch (err) {
                setError(err.message);
                // Sets the `error` state with the error message.
            } finally {
                setLoading(false);
                // Sets the `loading` state to false, regardless of success or failure.
            }
        };

        fetchOrders();
        // Invokes the data fetching function when the component mounts.
    }, []);
    // The empty dependency array ensures this effect runs only once when the component mounts.

    const handleOpenModal = (order) => {
        // Opens the modal and sets the selected order for editing.
        setSelectedOrder(order);
        // Updates the `selectedOrder` state with the selected order.

        setModalOpen(true);
        // Opens the modal by setting `isModalOpen` to true.
    };

    const handleCloseModal = () => {
        // Closes the modal and resets the selected order.
        setModalOpen(false);
        // Sets `isModalOpen` to false to close the modal.

        setSelectedOrder({});
        // Resets `selectedOrder` to an empty object.
    };

    const handleSaveDate = async (dogName, newDate) => {
        // Handles saving an updated delivery date for an order.
        try {
            const response = await fetch("/api/dogs", {
                method: "PUT",
                // Specifies a PUT request to update data.

                headers: {"Content-Type": "application/json"},
                // Sets the Content-Type header to indicate JSON data.

                body: JSON.stringify({dogName, deliveryDate: newDate}),
                // Sends the updated `dogName` and `deliveryDate` in the request body.
            });

            if (!response.ok) {
                throw new Error("Failed to update delivery date.");
                // Throws an error if the response status is not OK.
            }

            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.dogName === dogName
                        ? {...order, deliveryDate: newDate}
                        : order
                )
            );
            // Updates the delivery date for the matching order in the `orders` state.

            setModalOpen(false);
            // Closes the modal after saving.
        } catch (error) {
            console.error(error.message);
            // Logs any errors that occur during the save operation.
        }
    };

    if (loading) return <p className="text-center mt-4">Loading Orders...</p>;
    // Displays a loading message while data is being fetched.

    if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;
    // Displays an error message if an error occurs during data fetching.

    return (
        <div className="flex items-center bg-green justify-center mt-10 min-h-screen w-full bg-green-50">
            {/* Main container for the profile page layout. */}

            <div className="flex flex-col p-5 bg-gray-100 border border-gray-300 rounded-3xl w-full max-w-3xl">
                {/* Inner container for styling and layout. */}

                <div className="flex mb-4 items-center">
                    {/* Row for the back button and tabs switcher. */}

                    <button className="text-green-700 m-5">
                        <img width="20px" src="/left-arrow.svg" alt="back btn"/>
                        {/* Back button with an SVG icon. */}
                    </button>

                    <TabsSwitch/>
                    {/* Component for switching between tabs. */}
                </div>

                <TabUpcomingOrders onOpenModal={handleOpenModal}/>
                {/* Component to render and manage upcoming orders. Passes `handleOpenModal` as a prop. */}

                <TabFutureOrders orders={orders} onOpenModal={handleOpenModal}/>
                {/* Component to render and manage future orders. Passes `orders` and `handleOpenModal` as props. */}

                <OrderDetailsModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    orderDetails={selectedOrder}
                    onSave={handleSaveDate}
                />
                {/* Modal component for editing order details. Receives props to handle opening, closing, and saving. */}
            </div>
        </div>
    );
};

export default Profile;
// Exports the `Profile` component so it can be used in other parts of the application.
