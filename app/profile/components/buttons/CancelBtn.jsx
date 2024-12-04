import React from 'react';

const CancelBtn = ({onCancel}) => {
    return (
        <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            onClick={onCancel}>
            {`Cancel`}
        </button>
    );
};

export default CancelBtn;
