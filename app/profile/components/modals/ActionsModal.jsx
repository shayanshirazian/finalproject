import React from "react";
import SaveBtn from "../buttons/SaveBtn";
import CancelBtn from "../buttons/CancelBtn";
import EditBtn from "../buttons/EditBtn";

const ActionsModal = ({isEditing, onSave, onCancel, onEdit}) => (
    <div className="flex justify-end mt-2">
        {isEditing ? (
            <>
                <SaveBtn onSave={onSave}/>
                <CancelBtn onCancel={onCancel}/>
            </>
        ) : (
           <EditBtn onEdit={onEdit}/>
        )}
    </div>);

export default ActionsModal;