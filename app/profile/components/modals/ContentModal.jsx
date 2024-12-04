import React from "react";
import Divider from "../cartDetails/Divider";
import PrimaryRow from "../cartDetails/PrimaryRow";
import SecondaryRow from "../cartDetails/SecondaryRow";
import TertiaryRow from "../cartDetails/TertiaryRow";
import QuaternaryRow from "../cartDetails/QuaternaryRow";

const FutureOrderDetails = () => {
        // Sample orders array (could be dynamic or fetched)
        const orders = [
                {
                        dogName: "Ibel",
                        status: "Shipped",
                        portions: "Full meal",
                        recipes: "2 Chicken, 4 Beef",
                        deliveryDate: "2024-09-04",
                },
        ];

        // Repeat the same structure 3 times by mapping over [1, 2, 3]
        return (
            <div className="overflow-y-auto max-h-[90vh] p-3">
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="border p-4 mb-4 rounded-lg shadow-md">
                                <div>
                                        <PrimaryRow dogName={orders[0].dogName} status={orders[0].status} />
                                </div>
                                <Divider />
                                <div>
                                        <SecondaryRow title="Portions" value={orders[0].portions} />
                                </div>
                                <Divider />
                                <div>
                                        <TertiaryRow title="Recipes" value={orders[0].recipes} />
                                </div>
                                <Divider />
                                <div>
                                        <QuaternaryRow
                                            title="Delivery Date"
                                            value={orders[0].deliveryDate}
                                            order={null}
                                            onOpenModal={null}
                                            isEditing={null}
                                            newValue={null}
                                            setNewValue={null}
                                        />
                                </div>
                        </div>
                    ))}
            </div>
        );
};

export default FutureOrderDetails;
