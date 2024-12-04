// import React from "react";
// import Divider from "./cartDetails/Divider";
// import PrimaryRow from "./cartDetails/PrimaryRow";
// import SecondaryRow from "./cartDetails/SecondaryRow";
// import TertiaryRow from "./cartDetails/TertiaryRow";
// import QuaternaryRow from "./cartDetails/QuaternaryRow";
// import EditPenBtn from "./buttons/EditPenBtn";
//
// const OrderDetailCard = ({order, isEditing, onOpenModal}) => {
//     console.log(order, "orderDetailCard");
//     console.log(order.dogName, "order.dogName");
//     return (
//         <>
//             <div className="dogBoxes rounded-lg shadow-md border border-gray-200 m-3">
//                 <div className="flex flex-col m-5 ">
//                     <div className="innerContainer flex flex-col">
//                         <div>
//                             {/*<PrimaryRow*/}
//                             {/*    dogName={order.dogName}*/}
//                             {/*    Status order={order}*/}
//                             {/*/>*/}
//                         </div>
//                         <Divider/>
//                         <div>
//                             <SecondaryRow
//                                 title={"Portions"}
//                                 value={order.portions}
//                             />
//                         </div>
//                         <Divider/>
//                         <div>
//                             <TertiaryRow
//                                 title={"Recipes"}
//                                 value={order.recipes}
//                             />
//                         </div>
//                         <Divider/>
//                         <div className="flex justify-between items-center">
//                             <QuaternaryRow
//                                 title="Delivery Date"
//                                 value={order.deliveryDate}
//                                 isEditing={isEditing}
//                                 onOpenModal={onOpenModal}
//                                 order={order}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>)
// }
// export default OrderDetailCard;