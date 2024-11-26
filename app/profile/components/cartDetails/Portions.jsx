import React from 'react';

const Portions = ({portions}) => {
    return (
        <div className="flex justify-between">
            <span className="text-gray-500">Portions:</span>
            <span className="text-green-700">{portions}</span>
        </div>
    );
};

export default Portions;
