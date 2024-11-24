import React from "react";
// Imports React to create and use components.

const TabUpcomingOrders = ({onOpenModal}) => {
    // Defines a functional React component named `TabUpcomingOrders`.
    // Accepts a single prop `onOpenModal`, which is a function to be triggered when the ">" button is clicked.

    return (<div className="text-gray-600 mt-3 ml-1">
        {/* Outer container for the upcoming orders section. */}
        {/* Styled with Tailwind classes for gray text color, margin-top, and margin-left. */}
        Upcoming Orders
        {/* Section title displayed as plain text. */}

        <div className="flex flex-col m-3 p-4 rounded-lg shadow-md border border-grey-200">
            {/* Container for a single upcoming order card. */}
            {/* Uses Tailwind classes for spacing, rounded corners, shadow effect, and border. */}

            <div className="flex items-center justify-between">
                {/* A row containing order details, styled for alignment and spacing. */}

                <span className="text-xl text-black mr-4">04/09/2024</span>
                {/* Displays the delivery date of the order, styled as black text with extra-large font size. */}

                <span className="w-40 ">2 Chicken, 4 Beef</span>
                {/* Displays the order details (e.g., recipes). Has a fixed width. */}

                <span className="bg-blue-100 text-blue-500 px-2 text-xs rounded-full">
                        Shipped
                    </span>
                {/* Displays the status of the order ("Shipped"). */}
                {/* Styled with a blue background, blue text, small padding, extra-small text, and rounded corners. */}

                <button
                    className="text-lg font-extrabold text-green-700"
                    // Styled as a large, bold, green button.
                    onClick={onOpenModal}
                    // Triggers the `onOpenModal` function when the button is clicked.
                >
                    {`>`}
                    {/* Renders the ">" symbol as the button content. */}
                </button>
            </div>

            <div className="text-gray-500 text-xs mt-2">
                {/* A secondary row for additional order details (e.g., recipients). */}
                {/* Styled with gray text, extra-small font size, and margin-top. */}
                <span>For: </span>
                {/* Label text indicating the recipients. */}
                <span className="text-gray-600 text-xs">Rocky, Ible, Toflie, Res</span>
                {/* Displays the names of the recipients, styled as slightly darker gray text. */}
            </div>
        </div>
    </div>);
};

export default TabUpcomingOrders;
// Exports the `TabUpcomingOrders` component to be used in other parts of the application.
