import React from 'react';

const EditBtn = () => {
    return (
        <button
            className="text-blue-500 hover:underline hover:text-green-700 text-sm m-4 -mt-3 mr-8"
            // Blue "Edit" button with hover effects and smaller text.
            onClick={onEdit}
            // Calls the `onEdit` function to enable editing mode.
        >
            Edit
        </button>
    );
};

export default EditBtn;
