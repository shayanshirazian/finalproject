import React from "react";
import Divider from "../Divider";
import DogName from "../cartDetails/DogName";
import Portions from "../cartDetails/Portions";
import DeliveryDate from "../cartDetails/DeliveryDate";
import Recipes from "../cartDetails/Recipes";

const FutureOrderDetails = () => (
    <div className="overflow-y-auto max-h-[90vh] p-3">

        <DogName/>

        <Portions/>

        <Divider/>

        <Recipes/>

        <Divider/>

        <DeliveryDate/>

    < /div>
)
export default FutureOrderDetails;
