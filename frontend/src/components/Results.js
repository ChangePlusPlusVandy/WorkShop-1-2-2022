import React from 'react';
import {useLocation} from 'react-router-dom';


export default function Results() {
    const {state} = useLocation();
    const {name, passed} = state;

    return (
        <div>
            <p>Hi {name? name:"No name"}!</p>
            <p>{passed? "Congratulations!! You passed the quiz!":"YOU FAILED!!!!!"}</p>
        </div>
    );
}