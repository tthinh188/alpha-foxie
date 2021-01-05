import React from 'react'
import "./AddQuestion.css"
import {Button} from "@material-ui/core"

function AddQuestion() {
    return (
        <div className="add_question">
            <div className="question">
                <p>Question: </p>
                <input type="text" placeholder="Question"/>
            </div>
            
            <div className="answers">
                <p>Choice 1: </p>
                <input type="text" placeholder="choice A"/>
            </div>

            <div className="answers">
                <p>Choice 2: </p>
                <input type="text" placeholder="choice A"/>
             </div>


            <div className="buttons">
                <Button className="btn">
                    Submit
                </Button>
                <Button className="btn">
                    Add Choice
                </Button>
            </div>
        </div>
    )
}

export default AddQuestion
