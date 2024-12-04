import React from "react";
import CloseBtn from "../buttons/CloseBtn";

const HeaderModal = ({title, onClose}) => (
    <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold text-gray-800">{title}</span>
        <CloseBtn onClose={onClose}/>
    </div>
)
export default HeaderModal;