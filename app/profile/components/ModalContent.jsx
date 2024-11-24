import React from "react";

// Functional component for rendering the content of the modal.
// Props:
// - `orderDetails`: Contains the details of the selected order.
// - `isEditing`: A boolean indicating whether the user is in editing mode.
// - `newDate`: The currently selected date in the input field (if editing mode is active).
// - `setNewDate`: Function to update the `newDate` value.

const ModalContent = ({orderDetails, isEditing, newDate, setNewDate}) => (
    <div className="overflow-y-auto max-h-[90vh] p-3">
        {/* Container for the modal content with vertical scrolling enabled if content exceeds available height.
            - `overflow-y-auto`: Allows scrolling on vertical overflow.
            - `max-h-[90vh]`: Limits the height to 90% of the viewport.
            - `p-3`: Adds padding inside the container. */}

        {/* Dog Name */}
        <div className="flex justify-center">
            {/* Center-aligned section for the dog's name. */}
            <span className="text-green-700 font-extrabold">
                {orderDetails.dogName}
                {/* Displays the dog's name from the `orderDetails` prop in bold green text. */}
            </span>
        </div>

        {/* Divider */}
        <div className="m-3 border-t border-gray-300"></div>
        {/* Horizontal divider line for visual separation. */}

        {/* Portions */}
        <div className="flex justify-between">
            {/* Flexbox layout for displaying portion information. */}
            <span className="text-gray-500">Portions</span>
            {/* Label styled in light gray. */}
            <span className="text-green-700">{orderDetails.portions}</span>
            {/* Displays the portion details in green. */}
        </div>

        {/* Divider */}
        <div className="m-3 border-t border-gray-300"></div>

        {/* Recipes */}
        <div>
            <span className="text-gray-500">Recipes</span>
            {/* Label styled in light gray. */}
            <span className="text-green-700">{orderDetails.recipes}</span>
            {/* Displays the recipe details in green. */}
        </div>

        {/* Divider */}
        <div className="m-3 border-t border-gray-300"></div>

        {/* Delivery Date */}
        <div className="flex justify-between items-center">
            {/* Flexbox layout for displaying or editing the delivery date. */}
            <span className="text-gray-500">Delivery Date:</span>
            {/* Label styled in light gray. */}

            {isEditing ? (// If `isEditing` is true, display an input field to edit the date.
                <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    // Updates the `newDate` state when the input value changes.
                    className="ml-3 border rounded px-2 py-1"
                    // Adds margin, border, and padding for styling.
                />) : (// If `isEditing` is false, display the current delivery date.
                <span className="text-green-700 font-bold ml-3">
                    {orderDetails.deliveryDate}
                    {/* Displays the delivery date in bold green text. */}
                </span>)}
        </div>
    </div>);

export default ModalContent;
// Exports the `ModalContent` component for use in the modal layout.
