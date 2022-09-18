import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

export default function Game(){

    // todo: useLocation hook: Returns the current location object
    const {state} = useLocation();
    const {name} = state;
    const navigate = useNavigate();

    const LIMIT = 10;

    const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
    const [num2, setNum2] = useState(Math.floor(Math.random() * 10));

    const [score, setScore] = useState(0);
    const [numAskedQuestions, setNumAskedQuestions] = useState(0);


    const [message, setMessage] = useState("");

    const [answer, setAnswer] = useState(0);

    // todo: useEffect: Tells react that your component needs to do something after render
    useEffect(() => {
        setNum1(Math.floor(Math.random() * 10));
        setNum2(Math.floor(Math.random() * 10));
    }, [score]);

    useEffect(() => {
        if (numAskedQuestions === LIMIT) {
            // reset everything
            setScore(0);
            setNumAskedQuestions(0);
            navigate('/results', {state: {name: name, passed: score === numAskedQuestions}});
        }
    }, [numAskedQuestions]);


    return (
        <div>
            <h1>Simple math quiz</h1>
            <p>Hi {name? name:"No name"}!</p>
            <p>Score: {score}/{numAskedQuestions}</p>
            <p>What is {num1} + {num2}?</p>
            <input type="text" onChange={(e) => {
                setAnswer(e.target.value)
            }} />
            <button onClick={()=>{
                setNumAskedQuestions(numAskedQuestions+ 1);
                if (numAskedQuestions === LIMIT){
                    setMessage("Game Over!");
                }
                if (parseInt(answer) === num1 + num2){ // todo: use parseInt to convert string to int
                    console.log("increasing score");
                    setScore(score + 1);
                } 
                setAnswer('');
            }}>Submit</button>
            <p>{message}</p>
        </div>
    );
}