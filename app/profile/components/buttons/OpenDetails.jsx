import React from 'react';

const OpenDetails = ({onClick}) => {
    return (
        <button className="text-lg font-extrabold text-green-700"
                onClick={onClick}
        >
            {`>`}
        </button>

    );
};

export default OpenDetails;