import React from 'react'
import "./AddQuestion.css"
import { Button } from "@material-ui/core"
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddIcon from '@material-ui/icons/Add';
import AnswerList from "./AnswerList"

function AddQuestion() {
    // answerArray: property of a class --- \
    // setAnswerArray: set method for the property
    // useState keeps track of the variable throughout the application when state changes.
    // const [answerArray, setAnswerArray] = React.useState([1]);


    // const [answerDict, setAnswerDict] = React.useState({1:''})
    // const [disable, setDisable] = React.useState(false);

    // const handleAddAnswer = () => {
    //     setDisable(answerArray.length >= 4 ? true : false)
    //     setAnswerArray([...answerArray, answerArray.length + 1])
    // };

    // const handleRemove = (e) => {
    //     setDisable(false);
    //     // const tempArray= answerArray
    //     // tempArray.splice(e.target.id-1,1)
    //     // console.log(tempArray)

    //     // setAnswerArray([...tempArray]);
    //     // console.log(answerArray)
    //     var id = e.target.id;

    //     console.log('id= ' + id);
    //     console.log(answerArray)
    //     var temp = answerArray.slice(0, id - 1);
    //     var temp2 = answerArray.slice(id, answerArray.length);
    //     // .concat(answerArray.slice(e.target.id + 1, answerArray.length -1));
    //     // setAnswerArray(...temp);
    //     setAnswerArray(temp.concat(temp2));
    //     console.log(temp);
    //     console.log(temp2);
    // }

    const [questionText, setQuestionText] = React.useState("");

    const [answerText, setAnswerText] = React.useState("");

    const [answerArray, setAnswerArray] = React.useState([]);

    const [disable, setDisable] = React.useState(true);

    const questionHandle = (e) => {
        setQuestionText(e.target.value);
    };

    const answerHandle = (e) => {
        setAnswerText(e.target.value);
        if(e.target.value !== ""  && answerArray.length <= 4){
            setDisable(false);
        }

        else if (e.target.value == ""){
            setDisable(true);
        }
    }

    const addHandle = (e) => {
        e.preventDefault();
        setAnswerArray([
            ...answerArray, {text: answerText, id:Math.random()*1000}
        ])
        console.log(answerArray);
        setAnswerText("");
        setDisable(true);
    }
    return (
        <div className="add_question">
            <div className="question">
                <p>Question: </p>
                <input type="text" placeholder="Question"
                    onChange={ questionHandle }
                />
            </div>

            <div className="answer">
                <p>Answer: </p>
                <input
                    type="text"
                    placeholder="Answer"
                    onChange = { answerHandle }
                    value = {answerText}
                />
                <button disabled = {disable}
                onClick = {addHandle}
                >
                <AddIcon
                    className="icons"
                />
                
                </button>
            </div>

            <p>Answer:</p>

            <AnswerList
                answerArray={answerArray}
                setAnswerArray={setAnswerArray}
            />
            
            <div className="buttons">
                <Button className="btn">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default AddQuestion
