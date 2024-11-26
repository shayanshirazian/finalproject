import React from 'react';

const DogName = ({dogName}) => {
    return (
        <div className="flex justify-center m-5 -mt-4">
            <span className="text-green-700 font-extrabold">
                {dogName}
            </span>
        </div>
    );
};

export default DogName;
