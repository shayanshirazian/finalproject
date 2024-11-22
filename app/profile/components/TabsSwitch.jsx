"use client";
import React, { useState } from "react";

const SwitchButton = () => {
    const [activeTab, setActiveTab] = useState("Orders");

    return (
        <div className="flex justify-center items-center bg-gray-100 rounded-full p-2 w-full max-w-md mx-auto">
            {/* Orders Button */}
            <button
                onClick={() => setActiveTab("Orders")}
                className={`w-1/2 text-center py-2 rounded-full ${
                    activeTab === "Orders"
                        ? "bg-white text-green-700 font-bold"
                        : "text-gray-500"
                }`}
            >
                Orders
            </button>

            {/* History Button */}
            <button
                onClick={() => setActiveTab("History")}
                className={`w-1/2 text-center py-2 rounded-full ${
                    activeTab === "History"
                        ? "bg-white text-green-700 font-bold"
                        : "text-gray-500"
                }`}
            >
                History
            </button>
        </div>
    );
};

export default SwitchButton;
