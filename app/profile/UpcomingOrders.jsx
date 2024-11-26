import React from "react";
import OpenDetails from "./components/buttons/OpenDetails";
import DeliveryDate from "./components/cartDetails/DeliveryDate";
import DogName from "./components/cartDetails/DogName";
import Recipes from "./components/cartDetails/Recipes";
import Status from "./components/cartDetails/Status";

const UpcomingOrders = ({onOpenModal, orderDetails}) => {

    if (!orderDetails) return null;
    // If no order details are passed, render nothing.

    return (
        <div className="text-gray-600 mt-3 ml-1">
            Upcoming Orders
            <div className="flex flex-col m-3 p-4 rounded-lg shadow-md border border-grey-200">
                <div className="flex items-center justify-between">
                    <DeliveryDate/>
                    <span><DeliveryDate/></span>
                    <span><Recipes/></span>
                    <span><Status/></span>
                    <OpenDetails
                        onClick={() => onOpenModal(orderDetails)}
                        order={orderDetails}
                    />
                </div>
                <div className="text-gray-500 text-xs mt-2">
                    <span>For: </span>
                    <span><DogName/></span>
                </div>
            </div>
        </div>);
};
export default UpcomingOrders;
// Exports the `UpcomingOrders` component to be used in other parts of the application.
