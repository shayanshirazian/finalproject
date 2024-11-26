import React from "react";
import SaveBtn from "../buttons/SaveBtn";
import CancelBtn from "../buttons/CancelBtn";
import EditBtn from "../buttons/EditBtn";

// Functional component for rendering action buttons in the modal.
// Props:
// - `isEditing`: A boolean indicating whether the modal is in editing mode.
// - `onSave`: Function to handle saving changes.
// - `onCancel`: Function to cancel editing without saving changes.
// - `onEdit`: Function to enable editing mode.

const ActionsModal = ({isEditing, onSave, onCancel, onEdit}) => (
    <div className="flex justify-end mt-2">
        {/* Container for the action buttons, aligned to the right. */}
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
// Exports the `ActionsModal` component for use in the modal layout.
