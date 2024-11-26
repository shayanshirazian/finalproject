import React from 'react';

const Recipes = (recipes) => {
    return (
        <div className="flex justify-between">
            <span className="text-gray-500">Recipes:</span>
            <span className="text-green-700">{recipes}</span>
        </div>
    );
};

export default Recipes;
