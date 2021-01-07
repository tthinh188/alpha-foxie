import React from 'react'
import "./Question.css"

function Question() {
    const [disable, setDisable] = React.useState(false);

    const handler = (isCorrect,e) => {
        if(isCorrect === true){
            console.log("true")
            document.getElementById('btn').style.backgroundColor = 'Lime';
            setDisable(true);
            console.log(e);
        }
        else {
            console.log("false")
            document.getElementById('btn').style.backgroundColor = 'Red';
        }
    };

    const submitHandler = () => {
        setDisable(false);
    }
    
    const answers = [
        {text: "6", isCorrect: false}, 
        {text: "7", isCorrect: false},
        {text: "13", isCorrect: true},
        {text: "0", isCorrect: false}
    ]

    return (
        <div className="question">
            <p>How many blue stripes are there on the U.S. flag? </p>
            <div className="answer-options">
                {answers.map((answer) => (
                    <button
                        className="answer-option"
                        onClick = {() => handler(answer.isCorrect, answer)}
                        id="btn"
                        disabled={disable}
                    >{answer.text}</button>
                ))}
            </div>

            <button className="next-btn"
                onClick={submitHandler}>
                    Next Question
            </button>
            
        </div>
    )
}

export default Question
