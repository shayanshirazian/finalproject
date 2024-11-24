import React, { useState } from "react";
import "./Divider"
import ModalHeader from "../components/ModalHeader";
import ModalContent from "../components/ModalContent";
import ModalActions from "../components/ModalActions";
import Divider from "./Divider";

const OrderDetailsModal = ({ isOpen, onClose, orderDetails, onSave }) => {
  // Defines the `OrderDetailsModal` component with the following props:
  // - `isOpen`: Boolean that determines whether the modal is visible.
  // - `onClose`: Function to close the modal.
  // - `orderDetails`: Object containing details of the currently selected order.
  // - `onSave`: Function to save changes made in the modal.

  const [isEditing, setIsEditing] = useState(false);
  // Tracks whether the modal is in "editing mode."

  const [newDate, setNewDate] = useState(orderDetails?.deliveryDate || "");
  // Holds the updated delivery date being edited. Defaults to the delivery date in `orderDetails` or an empty string.

  if (!isOpen || !orderDetails) return null;
  // If the modal is not open or there are no order details, render nothing.

  const handleSave = () => {
    if (!newDate) return;
    // Ensures the new date is not empty before proceeding.

    onSave(orderDetails.dogName, newDate);
    // Calls the `onSave` function passed as a prop to update the delivery date.

    setIsEditing(false);
    // Exits editing mode after saving changes.
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Exits editing mode without saving changes.

    setNewDate(orderDetails.deliveryDate);
    // Resets the `newDate` to the original delivery date in `orderDetails`.
  };

  return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        {/* Modal backdrop that covers the entire screen with a semi-transparent background. */}
        {/* Centers the modal box using `flex`, `justify-center`, and `items-center`. */}

        <div className="bg-white rounded-xxl shadow-lg w-3/4 max-w-lg p-3 relative">
          {/* The modal container styled with a white background, rounded corners, shadow, and padding. */}

          {/* Modal Header */}
          <ModalHeader title="Order Details" onClose={onClose} />
          {/* Uses the `ModalHeader` component to display the modal title and a close button. */}

          <Divider/>
          {/* Modal Content */}
          <ModalContent
              orderDetails={orderDetails}
              isEditing={isEditing}
              newDate={newDate}
              setNewDate={setNewDate}
          />
          {/* Uses the `ModalContent` component to display order details, editable fields, and the delivery date. */}
          {/* Passes `orderDetails`, `isEditing`, `newDate`, and `setNewDate` as props to `ModalContent`. */}

         <Divider/>

          {/* Modal Actions */}
          <ModalActions
              isEditing={isEditing}
              onSave={handleSave}
              onCancel={handleCancel}
              onEdit={() => setIsEditing(true)}
          />
          {/* Uses the `ModalActions` component to provide action buttons for saving, canceling, or editing. */}
          {/* Passes `isEditing`, `handleSave`, `handleCancel`, and a function to enable editing as props. */}
        </div>
      </div>
  );
};

export default OrderDetailsModal;
// Exports the `OrderDetailsModal` component for use in other parts of the application.
