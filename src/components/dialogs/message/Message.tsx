import React from "react";
import classes from './message.module.css';

type Props = {
    message: string,
}

const Message: React.FC<Props> = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

export default Message;