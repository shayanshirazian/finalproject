import React from 'react';

const DeliveryDate = (deliveryDate, isEditing, newDate, setNewDate) => {
    return (
        <div className="flex  justify-between m-2">
            <span className="text-gray-500 w-[150px]">Delivery Date:</span>
            {isEditing ? (
                <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="ml-3 border rounded px-2 py-1 text-green-700"
                />
            ) : (
                <span className="text-green-700 font-bold ml-3">
                    {deliveryDate}
                </span>

            )}
        </div>
    )
};

export default DeliveryDate;
