import React from "react";
import EditPenBtn from "../buttons/EditPenBtn";

const QuaternaryRow = ({ title, value, isEditing, newValue, setNewValue, order, onOpenModal }) => {
    return (
        <div className="flex justify-between items-center w-full">
            <span className="text-gray-500">{title} :</span>
            <span className="flex">
                {isEditing ? (
                    <input
                        type="text"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}  // Update newValue on input change
                        className="ml-3 border rounded px-2 py-1 text-green-700"
                    />
                ) : (
                    <span className="text-green-700 mr-2">{value}</span>
                )}
                <EditPenBtn order={order} isEdit={isEditing} onOpenModal={onOpenModal} />
            </span>
        </div>
    );
};

export default QuaternaryRow;
