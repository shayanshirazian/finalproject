// import React, { useState } from "react";
// import HeaderModal from "./HeaderModal";
// import ContentModal from "./ContentModal";
// import Divider from "../cartDetails/Divider";
//
// const OrderDetailsModal = ({ isOpen, onClose, orderDetails }) => {
//     if (!isOpen || !orderDetails) return null;
//
//     return (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//             {/* Modal Backdrop */}
//             <div className="bg-white rounded-xl shadow-lg w-3/4 max-w-lg p-3 relative">
//                 {/* Modal Content */}
//                 <HeaderModal title="Order Details" onClose={onClose} />
//                 <Divider />
//                 <ContentModal orderDetails={orderDetails} />
//             </div>
//         </div>
//     );
// };
//
// export default OrderDetailsModal;