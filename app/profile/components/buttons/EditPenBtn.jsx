import React from 'react';

const EditPenBtn = (order,isEdit,onOpenModal) => {
  return (
      <img
          src="/Edit.svg"
          alt="editbtn"
          className="h-5 cursor-pointer"
          onClick={() => (isEdit ? onOpenModal(order) : null)}
      />
  );
};

export default EditPenBtn;
