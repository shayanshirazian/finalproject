import React, {useState} from "react";
import HeaderModal from "./HeaderModal";
import ContentModal from "./ContentModal";
import ActionsModal from "./ActionsModal";
import Divider from "../cartDetails/Divider";

const OrderDetailsModal = ({isOpen, onClose, orderDetails, onSave}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDate, setNewDate] = useState(orderDetails?.deliveryDate || "");

    if (!isOpen || !orderDetails) return null;

    const handleSave = () => {
        if (!newDate) return;
        onSave(orderDetails.dogName, newDate);
        setIsEditing(false);
    };
    const handleCancel = () => {
        setIsEditing(false);
        setNewDate(orderDetails.deliveryDate);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            {/* Backdrop for the modal with dark semi-transparent background. */}
            <div className="bg-white rounded-xxl shadow-lg w-3/4 max-w-lg p-3 relative">
                {/* Modal container with white background, rounded corners, and shadow. */}
                <HeaderModal title="Order Details" onClose={onClose}/>
                <Divider/>
                <ContentModal
                    orderDetails={orderDetails}
                    isEditing={isEditing}
                    newDate={newDate}
                    setNewDate={setNewDate}
                />
                <ActionsModal
                    isEditing={isEditing}
                    onSave={handleSave}
                    onCancel={handleCancel}
                    onEdit={() => setIsEditing(true)}
                />
            </div>
        </div>);};

export default OrderDetailsModal;