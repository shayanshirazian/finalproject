import React from 'react';

const SecondaryRow = ({title,value}) => {
    return (
        <div className="flex justify-between">
            <span className="text-gray-500">{title} :</span>
            <span className="text-green-700">{value}</span>
        </div>
    );
};

export default SecondaryRow;
