import React from "react";

// Functional component to render a styled horizontal divider.
const Divider = () => {
    return <div className="m-3 border-t border-gray-300"></div>;
    // Returns a <div> element styled to appear as a horizontal line with margin.
    // - `m-3`: Adds a margin of 3 units on all sides.
    // - `border-t`: Applies a border to the top of the element.
    // - `border-gray-300`: Colors the border with a light gray shade.
};

export default Divider;
// Exports the `Divider` component for use in other components or layouts.
