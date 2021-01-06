import React from 'react'
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle"

const Answer = ({ text, answer, answerArray, setAnswerArray }) => {
    const deleteHandler = () => {
        setAnswerArray(answerArray.filter((el) => el.id !== answer.id));
    };

    return (
        <div className="answers">
            <p className="answer">{text}</p>
            <RemoveCircleIcon
                className="icons"
                onClick={deleteHandler}
            />
        </div>
    )
};

export default Answer
