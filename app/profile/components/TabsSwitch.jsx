"use client";
import React, {useState} from "react";

const SwitchButton = () => {
    const [activeTab, setActiveTab] = useState("Orders");

    return (
        <div className="relative flex items-center bg-gray-200 rounded-full p-1 w-full max-w-sm mx-auto">
            {/* Gliding background */}
            <div
                className={`absolute h-full w-1/2 bg-white rounded-full shadow-md transition-all 
                duration-300 ease-in-out ${activeTab === "Orders" ? "left-0" : "left-1/2"}`}
            ></div>

            {/* Orders Button */}
            <button
                className={`relative w-1/2 text-center py-2 font-bold transition-all 
                ${activeTab === "Orders" ? "text-green-700" : "text-gray-500"}`}
                onClick={() => setActiveTab("Orders")}> Orders
            </button>

            {/* History Button */}
            <button
                className={`relative w-1/2 text-center py-2 font-bold transition-all 
                ${activeTab === "History" ? "text-green-700" : "text-gray-500"}`}
                onClick={() => setActiveTab("History")}> History
            </button>
        </div>
    );
};

export default SwitchButton;