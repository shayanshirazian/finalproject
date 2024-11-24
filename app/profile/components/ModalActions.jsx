import React from "react";

// Functional component for rendering action buttons in the modal.
// Props:
// - `isEditing`: A boolean indicating whether the modal is in editing mode.
// - `onSave`: Function to handle saving changes.
// - `onCancel`: Function to cancel editing without saving changes.
// - `onEdit`: Function to enable editing mode.

const ModalActions = ({isEditing, onSave, onCancel, onEdit}) => (<div className="flex justify-end mt-2">
    {/* Container for the action buttons, aligned to the right. */}
    {isEditing ? (// If `isEditing` is true, display "Save" and "Cancel" buttons.
        <>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
                // Green "Save" button with padding, rounded corners, and hover effect.
                onClick={onSave}
                // Calls the `onSave` function when clicked.
            >
                Save
            </button>
            <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                // Gray "Cancel" button with similar styling.
                onClick={onCancel}
                // Calls the `onCancel` function when clicked.
            >
                Cancel
            </button>
        </>) : (// If `isEditing` is false, display the "Edit" button.
        <button
            className="text-blue-500 hover:underline hover:text-green-700 text-sm mt-2"
            // Blue "Edit" button with hover effects and smaller text.
            onClick={onEdit}
            // Calls the `onEdit` function to enable editing mode.
        >
            Edit
        </button>)}
</div>);

export default ModalActions;
// Exports the `ModalActions` component for use in the modal layout.
