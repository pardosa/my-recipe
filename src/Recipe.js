import React from 'react';

const Recipe = ({title, calories, img, ingL}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={img} />
            <ul>{ingL.map(ing => (
                <li>{ing}</li>
            ))}</ul>
        </div>
    );
};

export default Recipe;