import React from 'react';

const SaveBtn = () => {
    return (
        <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
            onClick={onSave}
        >
            Save
        </button>
    );
};

export default SaveBtn;
