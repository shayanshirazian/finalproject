import React from "react";

const CloseBtn = ({ onClose }) => {
    console.log("close")
  return (
    <button className="text-gray-500 hover:text-red-500" onClick={onClose}>
      ✖
    </button>
  );
};

export default CloseBtn;
