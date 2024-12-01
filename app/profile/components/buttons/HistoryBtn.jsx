import React from 'react';

const HistoryBtn = ({isActive, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={`w-1/2 text-center   hover:bg-green-100 py-2 rounded-full 
            ${isActive ? "bg-white border border-white text-green-700 font-bold" : "text-gray-500"}`}
        >History
        </button>);
};

export default HistoryBtn;
