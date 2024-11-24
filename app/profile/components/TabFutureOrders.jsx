import React from "react";
// Imports React to create and use the component.

const TabFutureOrders = ({orders, onOpenModal}) => {
    // Defines a functional React component `TabFutureOrders`.
    // Accepts `orders` (list of order data) and `onOpenModal` (function to open a modal for editing an order) as props.

    return (<>
        {/* Fragment wrapper */}
        <div className="text-gray-600 mt-3 ml-1">Future Orders</div>
        {/* Header for the "Future Orders" section with gray text and some margin for positioning. */}

        {orders.map((order, index) => (// Iterates over the `orders` array to render a card for each order.
            <div
                key={index}
                // Sets a unique `key` for each card using the array index.
                className="dogboxes rounded-lg shadow-md border border-gray-200 m-3"
                // Styles the card with rounded corners, shadow, border, and margin.
            >
                <div className="flex justify-between m-2">
                    {/* Header row of the card displaying the dog name and order status. */}
                    <span className="text-green-900 mt-2 ml-2 font-bold">
                            {order.dogName}
                        {/* Displays the dog's name in bold green text. */}
                        </span>
                    <span
                        className={`${order.status === "Shipped" ? "bg-blue-100 text-blue-500" : "bg-yellow-100 text-yellow-500"} text-xs rounded-full px-3 py-1`}
                        // Dynamically applies styles based on the order status.
                        // If "Shipped", blue background and text; otherwise, yellow.
                    >
                            {order.status}
                        {/* Displays the status of the order (e.g., "Shipped"). */}
                        </span>
                </div>

                <div className="m-3 border-t border-gray-300"></div>
                {/* Divider line between sections. */}

                <div className="flex justify-between m-2">
                    {/* Row displaying the portion information. */}
                    <span className="text-gray-500 ml-3">Portions: </span>
                    {/* Label with light gray text. */}
                    <span className="text-green-700 mr-3">{order.portions}</span>
                    {/* Displays the portion details in green text. */}
                </div>

                <div className="m-3 border-t border-gray-300"></div>
                {/* Divider line between sections. */}

                <div className="flex justify-between m-2">
                    {/* Row displaying the recipe information. */}
                    <span className="text-gray-500 ml-3">Recipes:</span>
                    {/* Label with light gray text. */}
                    <span className="text-green-700 mr-3">{order.recipes}</span>
                    {/* Displays the recipe details in green text. */}
                </div>

                <div className="m-3 border-t border-gray-300"></div>
                {/* Divider line between sections. */}

                <div className="flex justify-between m-2">
                    {/* Row displaying the delivery date and an edit button. */}
                    <div className="flex items-center justify-around">
                        <span className="text-gray-500 mr-96 ml-3">Delivery Date:</span>
                        {/* Label for the delivery date with gray text. */}
                        <span className="text-green-700 font-bold ml-20">
                                {order.deliveryDate}
                            {/* Displays the delivery date in bold green text. */}
                            </span>
                    </div>
                    <img
                        src="/Edit.svg"
                        alt="editbtn"
                        className="h-3.5 cursor-pointer ml-1 mr-3"
                        // Styles the edit button with a small size and pointer cursor on hover.
                        onClick={() => onOpenModal(order)}
                        // Calls `onOpenModal` with the current order data when the button is clicked.
                    />
                </div>
            </div>))}
    </>);
};

export default TabFutureOrders;
// Exports the `TabFutureOrders` component for use in other parts of the application.
