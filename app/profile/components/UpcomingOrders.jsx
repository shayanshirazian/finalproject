import React from "react";

const UpcomingOrders = ({orders, handleOpenModal}) => {
   console.log(orders);
   if (!orders) {
       return null;
   }
    return (
        <div className="Upcoming Orders">
            <div className="text-gray-600 mt-3 ml-1"> Upcoming Orders
                <div className="flex flex-col m-3 p-4 rounded-lg shadow-md border border-grey-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="font-bold">
                                {orders?.[0]?.deliveryDate || "No Delivery Date"}
                                {/* <QuaternaryRow title={"Delivery Date"} value={orders.deliveryDate} /> */}
                            </span>
                            <span className="text-xs text-gray-500 ml-3">
                                {orders?.[0]?.recipes || "No Recipes"}
                                {/* <SecondaryRow title={"Delivery Date"} value={orders.value}/> */}
                            </span>
                            <span className="bg-blue-100 text-blue-500 text-xs rounded-full px-3 py-1 ml-3"> Shipped</span>
                            <div>
                                <div className="text-gray-400 mt-2">
                                    <span>For: </span>
                                    <span className="text-gray-500 text-xs mt-2">
                                        {orders.map((dog) => dog.dogName).join(", ")}
                                    </span>
                                    {/* <span> <PrimaryRow name={orders.dogName}/></span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default UpcomingOrders;
