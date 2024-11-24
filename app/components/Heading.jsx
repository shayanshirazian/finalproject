import React from 'react';
import {text} from "node:stream/consumers";

const Heading = ({text}) => {
    return (
        <h1 className="text-4xl font-bold text-green-700">
            {text}
        </h1>
    );
};

export default Heading;
