import React from "react";
import CancelBtn from "../buttons/CancelBtn";

const HeaderModal = ({title, onClose}) => (
    <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold text-gray-800">{title}</span>
        <CancelBtn onClose={onClose}/>
    </div>
)
export default HeaderModal;