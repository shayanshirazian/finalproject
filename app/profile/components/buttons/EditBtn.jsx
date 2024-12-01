import React from 'react';

const EditBtn = ({onEdit}) => {
    return (
        <button
            className="text-blue-500 hover:underline hover:text-green-700 text-sm m-4 -mt-3 mr-8"
            onClick={onEdit}
        >
            Edit
        </button>
    );
};

export default EditBtn;
