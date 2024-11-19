const OrderDetailsModal = ({isOpen, onClose, orderDetails}) => {
    if (!isOpen) return null;

    return (<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        {/* Modal Box */}
        <div className="bg-white rounded-xxl shadow-lg w-3/4 max-w-lg p-3 relative">
            {/* Header */}
            <div>
                <span className="text-sm ml-3 mb-2">Order Details</span>
                <button className="mr-3 float-right" onClick={onClose}>
                    ✖
                </button>
            </div>

            {/* Divider */}
            <div className="m-2 border-t border-gray-300"></div>

            {/* Scrollable Content */}
            <div
                className="overflow-y-auto max-h-[90vh] p-3" // Makes content scrollable
            >
                {orderDetails.map((order, index) => (
                    <div key={index} className="rounded-lg border border-grey-200 mb-3">
                        {/* Order Header */}
                        <div className="flex justify-between m-2">
                            <span className="text-green-900 font-bold">{order.dogName}</span>
                            <span className="bg-blue-100 text-blue-500 text-xs rounded-full px-3 py-1">
                  {order.status}
                </span>
                        </div>

                        {/* Divider */}
                        <div className="m-3 border-t border-gray-300"></div>

                        {/* Order Portions */}
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500">Portions:</span>
                            <span className="text-green-700">{order.portions}</span>
                        </div>

                        {/* Divider */}
                        <div className="m-3 border-t border-gray-300"></div>

                        {/* Order Recipes */}
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500">Recipes:</span>
                            <span className="text-green-700">{order.recipes}</span>
                        </div>

                        {/* Divider */}
                        <div className="m-3 border-t border-gray-300"></div>

                        {/* Delivery Date */}
                        <div className="flex justify-between m-2">
                            <span className="text-gray-500">Delivery Date:</span>
                            <span className="text-green-700">{order.deliveryDate}</span>
                        </div>
                    </div>))}
            </div>
        </div>
    </div>);
};

export default OrderDetailsModal;
