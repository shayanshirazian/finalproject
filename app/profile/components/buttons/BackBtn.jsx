import React from 'react';

const BackBtn = ({onClick}) => {
    return (
        <button
            className="text-green-700 m-5"
            onClick={onClick}
        >
            <img width="20px" src="/left-arrow.svg" alt="back btn"/>
        </button>
    );
};

export default BackBtn;
