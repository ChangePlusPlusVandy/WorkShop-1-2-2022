import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


export default function Welcome() {
    // todo: useState: Returns a stateful value, and a function to update it.


    const [name, setName] = useState('');
    const navigate = useNavigate();


    return (
    <div>
        <p>Welcome, please enter your name: {name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => {
            navigate('/game', {state: {name: name}});
        }}>Submit</button>
    </div>
    );
}