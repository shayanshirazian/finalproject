import React from "react";
import Divider from "./Divider";
import DogName from "./cartDetails/DogName";
import Portions from "./cartDetails/Portions";
import Recipes from "./cartDetails/Recipes";
import DeliveryDate from "./cartDetails/DeliveryDate";
import Status from "./cartDetails/Status";

const OrderDetailCard = ({order, index, isEdit, onOpenModal}) => {
    return (<>
            {/* Fragment wrapper */}
            <div
                key={index}
                // Sets a unique `key` for each card using the array index.
                className="dogBoxes rounded-lg shadow-md border border-gray-200 m-3">
                <div className="flex justify-between m-2">
                    <DogName/>
                    <Status/>
                </div>

                <Divider/>

                <Portions order={order}/>

                <Divider/>

                <Recipes order={order}/>

                <Divider/>

                <DeliveryDate/>
                <img src="/Edit.svg"
                     alt="editbtn"
                     className="h-5 cursor-pointer"
                     onClick={() => isEdit ? onOpenModal(order) : null}
                />

            </div>
        </>
    )
}
export default OrderDetailCard;