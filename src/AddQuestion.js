import React from 'react'
import "./AddQuestion.css"
import { Button } from "@material-ui/core"
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DoneIcon from '@material-ui/icons/Done';

function AddQuestion() {
    // answerArray: property of a class --- \
    // setAnswerArray: set method for the property
    // useState keeps track of the variable throughout the application when state changes.
    const [answerArray, setAnswerArray] = React.useState([1]);

    const [questionText, setQuestionText] = React.useState("");

    // const [answerDict, setAnswerDict] = React.useState({1:''})
    const [disable, setDisable] = React.useState(false);
    const handleAddAnswer = () => {
        setDisable(answerArray.length >= 4 ? true : false)
        setAnswerArray([...answerArray, answerArray.length + 1])
    };
    const handleRemove = (e) => {
        setDisable(false);
        // const tempArray= answerArray
        // tempArray.splice(e.target.id-1,1)
        // console.log(tempArray)

        // setAnswerArray([...tempArray]);
        // console.log(answerArray)
        var id = e.target.id;

        console.log('id= ' + id);
        console.log(answerArray)
        var temp = answerArray.slice(0, id - 1);
        var temp2 = answerArray.slice(id, answerArray.length);
        // .concat(answerArray.slice(e.target.id + 1, answerArray.length -1));
        // setAnswerArray(...temp);
        setAnswerArray(temp.concat(temp2));
        console.log(temp);
        console.log(temp2);
    }

    const questionHandle = (e) => {
        setQuestionText(e.target.value);
        console.log(questionText);
    };

    return (
        <div className="add_question">
            <div className="question">
                <p>Question: </p>
                <input type="text" placeholder="Question"
                    onChange={ questionHandle }
                    />
            </div>
            {answerArray.map(item =>
                <div className="answers">
                    <p>Choice {item} </p>
                    <input type="text" placeholder={'choice ' + item} />
                    <RemoveCircleIcon
                        className="removeIcons"
                        id={item}
                        onClick={handleRemove}
                    />
                </div>
            )}

            <div className="buttons">
                <Button className="btn">
                    Submit
                </Button>
                <Button className="btn"
                    onClick={handleAddAnswer}
                    disabled={disable}
                >
                    Add Choice
                </Button>

            </div>
        </div>
    )
}

export default AddQuestion
