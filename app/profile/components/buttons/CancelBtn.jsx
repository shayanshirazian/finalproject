import React from 'react';

const CancelBtn = () => {
    return (
        <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            // Gray "Cancel" button with similar styling.
            onClick={onCancel}
            // Calls the `onCancel` function when clicked.
        >
            Cancel
        </button>
    );
};

export default CancelBtn;
