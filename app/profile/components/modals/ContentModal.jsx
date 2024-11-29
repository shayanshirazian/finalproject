import React from "react";
import Divider from "../cartDetails/Divider";
import PrimaryRow from "../cartDetails/PrimaryRow";
import SecondaryRow from "../cartDetails/SecondaryRow";
import TertiaryRow from "../cartDetails/TertiaryRow";
import QuaternaryRow from "../cartDetails/QuaternaryRow";

const FutureOrderDetails = () => (
    <div className="overflow-y-auto max-h-[90vh] p-3">
        <div><PrimaryRow/></div>
        <div><SecondaryRow/></div>
        <Divider/>
        <div><TertiaryRow/></div>
        <Divider/>
        <div><QuaternaryRow /></div>
    < /div>
)
export default FutureOrderDetails;
