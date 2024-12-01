import React from 'react';

const CloseBtn = ({onClose, ariaLabel="Close"}) => {
    return (
        <button
            className="text-gray-500 hover:text-red-500"
            onClick={onClose}
            aria-label={ariaLabel}
        >
            ✖
        </button>
    );
};

export default CloseBtn;
