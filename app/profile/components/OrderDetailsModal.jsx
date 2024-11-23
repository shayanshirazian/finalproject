import React, { useState } from "react";
// Imports React and the `useState` hook for managing local state.

const OrderDetailsModal = ({ isOpen, onClose, orderDetails, onSave }) => {
  // Receives the following props:
  // - `isOpen`: Boolean indicating if the modal should be visible.
  // - `onClose`: Function to close the modal.
  // - `orderDetails`: Details of the currently selected order.
  // - `onSave`: Function to save updates to the order.

  // State for editing mode and the updated delivery date
  const [isEditing, setIsEditing] = useState(false);
  // Tracks whether the modal is in "editing mode."

  const [newDate, setNewDate] = useState(orderDetails?.deliveryDate || "");
  // Holds the new delivery date being edited. Initializes with the current delivery date from `orderDetails` or an empty string.

  if (!isOpen || !orderDetails) return null;
  // If the modal is closed (`isOpen` is false) or there are no order details, render nothing.

  const handleSave = () => {
    if (!newDate) return;
    // Prevent saving if the `newDate` is empty.

    onSave(orderDetails.dogName, newDate);
    // Calls the `onSave` function passed from the parent to update the delivery date for the current order.

    setIsEditing(false);
    // Exit editing mode after saving.
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Exit editing mode without saving changes.

    setNewDate(orderDetails.deliveryDate);
    // Reset the `newDate` to the original delivery date in `orderDetails`.
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      {/* The modal's backdrop. Covers the entire screen with a semi-transparent background.
          The `fixed inset-0` classes ensure the modal occupies the full viewport.
          `justify-center items-center` centers the modal box. */}

      <div className="bg-white rounded-xxl shadow-lg w-3/4 max-w-lg p-3 relative">
        {/* Modal container. Styled as a white box with rounded corners and shadows for visual hierarchy. */}

        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          {/* Header with the title and a close button. */}
          <span className="text-lg font-bold text-gray-800">Order Details</span>
          {/* Modal title styled as bold text. */}

          <button
            className="text-gray-500 hover:text-red-500"
            onClick={onClose}
          >
            ✖
            {/* Button to close the modal. Calls the `onClose` function when clicked. */}
          </button>
        </div>

        {/* Divider */}
        <div className="m-2 border-t border-gray-300"></div>
        {/* A horizontal divider between the header and the content. */}

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] p-3">
          {/* Content section. Includes a scrollable area for large content. */}

          {/* Dog Name */}
          <div className="flex justify-center">
            {/* <span className="text-gray-500 font-bold">Name:</span> */}
            <span className="text-green-700 font-extrabold  ">
              {orderDetails.dogName}
            </span>
            {/* Displays the dog's name from the `orderDetails` prop. */}
          </div>

          {/* Divider */}
          <div className="m-3 border-t border-gray-300"></div>

          {/* Delivery Date */}
          <div className="flex flex-col m-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Portions</span>
            </div>
              {/* Divider */}
          <div className="m-3 border-t border-gray-300"></div>
            <div>
              <span className="text-gray-500">Recipes</span>
            </div>
              {/* Divider */}
          <div className="m-3 border-t border-gray-300"></div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 ">Delivery Date:</span>
              {isEditing ? (
                // If in editing mode, show an input field.
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="ml-3 border rounded px-2 py-1"
                  // Updates the `newDate` state when the input value changes.
                />
              ) : (
                // If not in editing mode, show the current delivery date.
                <span className="text-green-700 font-bold ml-3">
                  {orderDetails.deliveryDate}
                </span>
              )}
            </div>
            {/* Divider */}
            <div className="m-3 border-t border-gray-300"></div>
            {/* Action Buttons */}
            {isEditing ? (
              // If in editing mode, show "Save" and "Cancel" buttons.
              <div className="flex justify-end mt-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
                  onClick={handleSave}
                  // Calls `handleSave` when the "Save" button is clicked.
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                  onClick={handleCancel}
                  // Calls `handleCancel` when the "Cancel" button is clicked.
                >
                  Cancel
                </button>
              </div>
            ) : (
              // If not in editing mode, show an "Edit" button.
              <button
                className="text-blue-500 hover:underline hover:text-green-700 text-sm mt-2 flex justify-end mr-5"
                onClick={() => setIsEditing(true)}
                // Enables editing mode when clicked.
              >
                Edit
                {/* <img src="Edit.svg" className="w-8"/> */}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
// Exports the `OrderDetailsModal` component to be used in other parts of the application.

