"use client";
import React, {useState} from "react";
import OrderBtn from "./buttons/OrderBtn";
import HistoryBtn from "./buttons/HistoryBtn";

const SwitchButton = () => {
    const [activeTab, setActiveTab] = useState("Orders");

    return (
        <div className="flex justify-center items-center bg-gray-100 rounded-full p-2 w-full max-w-md mx-auto">

            {/* Orders Button */}
            <OrderBtn
                isActive={activeTab === "Orders"}
                onClick={() => setActiveTab("Orders")}/>

            {/* History Button */}
            <HistoryBtn
                isActive={activeTab === "Orders"}
                onClick={() => setActiveTab("History")}/>
        </div>
    );
};

export default SwitchButton;