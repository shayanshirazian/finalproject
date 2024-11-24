import React from "react";

// Functional component for rendering the modal header.
// Props:
// - `title`: The title text to display in the header.
// - `onClose`: A function to handle closing the modal.

const ModalHeader = ({title, onClose}) => (<div className="flex justify-between items-center mb-3">
    {/* Container for the header styled with flexbox for horizontal alignment. */}
    {/* Adds margin at the bottom (`mb-3`) to separate it from the content below. */}

    <span className="text-lg font-bold text-gray-800">{title}</span>
    {/* Displays the modal's title in large, bold text styled with a dark gray color. */}

    <button
        className="text-gray-500 hover:text-red-500"
        onClick={onClose}
    >
        {/* Button to close the modal. */}
        {/* Default text color is gray; changes to red when hovered. */}
        ✖
        {/* Close icon displayed as text. */}
    </button>
</div>);

export default ModalHeader;
// Exports the `ModalHeader` component for use in other parts of the application.
