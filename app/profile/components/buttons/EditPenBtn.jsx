import React from 'react';

const EditPenBtn = ({order, isEdit, handleOpenModal}) => {
    return (
        <img
            src="/Edit.svg"
            alt="editbtn"
            className="h-5 cursor-pointer"
            onClick={() => (isEdit ? handleOpenModal(order) : null)}
        />
    );
};

export default EditPenBtn;
