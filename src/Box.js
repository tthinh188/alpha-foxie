import React from 'react'
import {Paper, withStyles} from "@material-ui/core"

const styles ={
    box: {
        borderRadius: '10px',
    },

    question: {
        width: '50%',
        margin: '0 auto'
    }
};

function Box(props) {
    const { classes, children, className, ...other } = props;
    return (
        <div className={classes.box}>
            <Paper className={classes.question}>          
                <h4>Question</h4>
                <p> 1 + 1 = ?</p>
            </Paper>
            
        </div>  
    );
}

export default withStyles(styles)(Box);