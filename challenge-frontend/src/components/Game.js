import React, {useState} from 'react'
import axios from 'axios'


function Game(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [message, setMessage] = useState("")
    
    
    async function getRandomNumbers(){
        const response = await axios.get("http://localhost:3000/random");

        setNum1(response.data.num1);
        setNum2(response.data.num2);
    }

    return (
        <div>
            <p>Game component</p>
            <p>What is {num1} + {num2}: </p>
            <input type="text" onChange={(e) => {
                setAnswer(e.target.value)
            }} />

            <button onClick={() => {
                if (parseInt(num1) + parseInt(num2) === parseInt(answer)){
                    setMessage("Right!")
                } else {
                    setMessage("Wrong!")
                }
            }}>Submit</button>

            <button onClick={async ()=>{
                await getRandomNumbers()
                setMessage("")
            }}>Get new numbers</button>
            <p>{message}</p>
            <p>Your answer: {answer}</p>
        </div>
    )
}

export default Game;