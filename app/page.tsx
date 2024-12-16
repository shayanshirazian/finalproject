import React from "react";
import "./globals.css";

export default function Home() {
  return (
    <div className=" bg-background flex flex-col items-center justify-start mt-32 min-h-screen ">
      <h1 className="text-4xl font-bold text-green-700">{`Welcome to Cola's Kitchen`}</h1>
      <p className="text-lg text-gray-600 mt-4">
        {`Navigate to section Profile`}
      </p>
    </div>
  );
}