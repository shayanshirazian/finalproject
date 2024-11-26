import React from 'react';

const Status = () => {
    return (
        <span
            className={`${order.status === "Shipped" ? "bg-blue-100 text-blue-500"
                :
                "bg-yellow-100 text-yellow-500"} text-xs rounded-full px-3 py-1`}>
            {order.status}
                    </span>);
};

export default Status;
