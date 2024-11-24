"use client";
// Indicates that this component will run on the client side in a Next.js application.

import React, {useState} from "react";
const SwitchButton = () => {
    // Declares the `SwitchButton` functional component.

    const [activeTab, setActiveTab] = useState("Orders");
    // Defines a state variable `activeTab` initialized to "Orders".
    // The `setActiveTab` function is used to update the active tab.

    return (<div className="flex justify-center items-center bg-gray-100 rounded-full p-2 w-full max-w-md mx-auto">
        {/* Main container for the switch buttons */}
        {/* Styled with Tailwind CSS for flex layout, centering, rounded corners, and responsive width. */}

        {/* Orders Button */}
        <button
            onClick={() => setActiveTab("Orders")}
            // Sets `activeTab` to "Orders" when the button is clicked.

            className={`w-1/2 text-center   hover:bg-green-100  py-2 rounded-full ${activeTab === "Orders" ? "bg-white  border border-white text-green-700 font-bold" : "text-gray-500"}`}
            // Dynamically applies classes based on whether "Orders" is the active tab:
            // - Active: White background, green text, bold font.
            // - Inactive: Gray text only.
        >
            Orders
            {/* Label text for the "Orders" button. */}

        </button>

        {/* History Button */}
        <button
            onClick={() => setActiveTab("History")}
            // Sets `activeTab` to "History" when the button is clicked.

            className={`w-1/2 text-center   hover:bg-green-100 py-2 rounded-full ${activeTab === "History" ? "bg-white border border-white text-green-700 font-bold" : "text-gray-500"}`}
            // Dynamically applies classes based on whether "History" is the active tab:
            // - Active: White background, green text, bold font.
            // - Inactive: Gray text only.
        >
            History
            {/* Label text for the "History" button. */}

        </button>
    </div>);
};

export default SwitchButton;
// Exports the `SwitchButton` component for use in other parts of the application.
