import React from "react";

const HeaderModal = ({ title, onClose }) => (
  <div className="flex justify-between items-center mb-3">
    <span className="text-lg font-bold text-gray-800">{title}</span>
    <button
      className="closeBtn text-gray-500 hover:text-red-500"
      onClick={onClose}
    >
      ✖
    </button>
  </div>
);
export default HeaderModal;
