import React from 'react'
import Answer from "./Answer"

const AnswerList = ({answerArray, setAnswerArray}) => {

    return (
        <div className="answer-container">
            {answerArray.map((answer) => (
                <Answer
                setAnswerArray = {setAnswerArray}
                answerArray={answerArray}
                answer={answer}
                key= {answer.id}
                text = {answer.text}/>
            ))}
        </div>
    );
};

export default AnswerList;