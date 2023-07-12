import React from "react";
import Message from "./Message";
import classes from './messages.module.css';
import { MessageType } from "../../types/types";

type Props = {
    messages: Array<MessageType>,
}

const Messages: React.FC<Props> = React.memo(({messages}) => {
    return(
        <div className={classes.messages} >
            {messages.map((message, index) => <Message message={message} key={index}/>)}
        </div>
    )
})

export default Messages;