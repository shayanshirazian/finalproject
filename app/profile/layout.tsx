"use client"
// Indicates that this component is a client-side rendered component in Next.js.

import React from "react";
// Imports React for creating React components.

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    // Defines a functional component `ProfileLayout` that accepts `children` as a prop.
    // The `children` prop represents any nested components or elements passed to this layout.

    return (
        <div className="">
            {/* Outer container. An empty className is included, allowing for future styles to be added. */}

            <header className="text-center text-xl font-bold"></header>
            {/* Header element with centered text, bold styling, and an extra-large font size.
          Currently, no content is provided inside the header. */}

            {children}
            {/* Renders the `children` prop, which allows nested content to be displayed inside this layout. */}
        </div>
    );
}
