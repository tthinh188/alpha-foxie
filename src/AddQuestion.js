import React from 'react'
import "./AddQuestion.css"
import { Button } from "@material-ui/core"
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddIcon from '@material-ui/icons/Add';
import AnswerList from "./AnswerList"

function AddQuestion() {

    const [questionText, setQuestionText] = React.useState("");

    const [answerText, setAnswerText] = React.useState("");
    const [answerArray, setAnswerArray] = React.useState([]);

    const [disable, setDisable] = React.useState(true);

    const questionHandler = (e) => {
        setQuestionText(e.target.value);
    };

    const answerHandler = (e) => {
        setAnswerText(e.target.value);
        if (e.target.value !== "" && answerArray.length <= 4) {
            setDisable(false);
        }

        else if (e.target.value == "") {
            setDisable(true);
        }
    };

    const addHandler = (e) => {
        e.preventDefault();
        setAnswerArray([
            ...answerArray, { text: answerText, id: Math.random() * 1000 }
        ])
        console.log(answerArray);
        setAnswerText("");
        setDisable(true);
    };

    const submitHandler = () => {
        console.log("submit");
    };

    return (
        <div className="add_question">
            <div className="question">
                <p>Question: </p>
                <input type="text" placeholder="Question"
                    onChange={questionHandler}
                />
            </div>

            <div className="answer">
                <p>Answer: </p>
                <input
                    type="text"
                    placeholder="Answer"
                    onChange={answerHandler}
                    value={answerText}
                />
                <button
                    className="add-btn"
                    disabled={disable}
                    onClick={addHandler}
                >
                    <AddIcon
                        className="icons"
                    />
                </button>
            </div>

            <AnswerList
                answerArray={answerArray}
                setAnswerArray={setAnswerArray}
            />

            <div className="submit-btn">
                <Button
                    className="btn"
                    onClick={submitHandler}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
};

export default AddQuestion;
