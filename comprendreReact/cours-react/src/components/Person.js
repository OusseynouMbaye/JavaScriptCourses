import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Gender : {props.gender}</h1>
            <h1> {props.age}</h1>
        </div>
    );
};

export default Person;