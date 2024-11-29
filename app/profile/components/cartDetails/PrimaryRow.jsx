import React from 'react';


const PrimaryRow = ({dogName}) => {
    return (
        <div className="flex justify-between items-center w-full">
            <span className="DogName text-green-700 font-extrabold">{dogName}</span>
            <span className="bg-blue-100 text-blue-500 text-xs rounded-full px-3 py-1">Shipped</span>
        </div>
    );
};

export default PrimaryRow;