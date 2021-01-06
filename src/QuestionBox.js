import React from 'react'
import { Paper, withStyles } from "@material-ui/core"
import { Button } from "@material-ui/core"

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
    box: {
        borderRadius: '10px',
    },

    question: {
        width: '50%',
        margin: '0 auto'
    },

    answers: {
        width: '50%',
        margin: '0 auto',

    },

    answer: {
        display: 'block',
        margin: '0 auto',
        width: '50%',
        background: styledBy('color', {
            default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        }),
        border: 'red solid 1px',
    },

    nextquestion: {

        backgroundColor: 'gray',
    },
};

function QuestionBox(props) {
    const { classes, children, className, ...other } = props;

    const [color, setColor] = React.useState('default');

    const [selected, setSelected] = React.useState(false);

    const handleChange = (event) => {
        console.log("function called");
        console.log(event.target.id);
        setColor(color === 'default' ? 'primary' : 'default');
    };

    return (
        <div className={classes.box}>
            <Paper className={classes.question}>
                <h4>Question</h4>
                <p> 1 + 1 = ?</p>
            </Paper>
            {["1", "2", "3", "4"].map(item =>
                <Button
                    id={item}
                    className={classes.answer}
                    onClick={handleChange}
                    variant="contained"
                    color={color}
                >
                    {item}
                </Button>)}

            <Button className={classes.nextquestion}>
                Next Question
            </Button>
        </div>
    );
}

export default withStyles(styles)(QuestionBox);