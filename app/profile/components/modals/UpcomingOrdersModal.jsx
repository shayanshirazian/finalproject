import React from "react";
import HeaderModal from "./HeaderModal";
import Divider from "../cartDetails/Divider";
import OrderDetailCard from "../OrderDetailCard";

const OrderDetailsModal = ({
  isOpen,
  onClose,
  orders,
  //    onSave,
  onOpenModal,
}) => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [newDate, setNewDate] = useState(orderDetails?.deliveryDate || "");

  if (!isOpen || !orders) return null;

  // const handleSave = () => {
  //     if (!newDate) return;
  //     onSave(orderDetails.dogName, newDate);
  //     setIsEditing(false);
  // };
  // const handleCancel = () => {
  //     setIsEditing(false);
  //     setNewDate(orderDetails.deliveryDate);
  // };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      {/* Backdrop for the modal with dark semi-transparent background. */}
      <div className="bg-white rounded-xxl shadow-lg w-3/4 max-w-lg p-3 relative">
        {/* Modal container with white background, rounded corners, and shadow. */}
        <HeaderModal title="Order Details" onClose={onClose} />
        <Divider />
        {orders.map((order, index) => (
          <div key={index}>
            <OrderDetailCard
              order={order}
              onOpenModal={onOpenModal}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsModal;
