import React from "react";
import "./globals.css"

export default function Home() {
    return (
        <div className=" bg-background flex flex-col items-center justify-center min-h-screen ">
            <h1 className="text-4xl font-bold text-green-700">Welcome to {`Cola's`} Cart</h1>
            <p className="text-lg text-gray-600 mt-4">
                Navigate to different sections like Profile, FAQ, and more using the header.
            </p>
        </div>
    );
}
