import React from "react";
import Heading from "./components/Heading";
import Description from "./components/Description";

import "./globals.css"

export default function Home() {
    return (
        <div className=" bg-background flex flex-col items-center justify-start mt-32 min-h-screen ">
            <Heading text="Welcome to Cola's Kitchen"/>
            <Description text="Navigate to different sections like Profile, FAQ, and more using the header"/>
        </div>
    );
}


