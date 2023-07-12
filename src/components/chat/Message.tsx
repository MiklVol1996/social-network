import React from "react";
import classes from './message.module.css';
import { MessageType } from "../../types/types";
import defAva from '../../images/defaultAva.jpg';

type Props = {
    message: MessageType,
}

const Message: React.FC<Props> = React.memo(({ message }) => {

    return (
        <div className={classes.wrap}>
            <div className={classes.name}>
                {message.userName}
            </div>
            <div className={classes.flex}>
                <div>
                    <div className={classes.image}>
                        <img src={message.photo ? message.photo : defAva} />
                    </div>
                </div>
                <div className={classes.message}>
                    {message.message}
                </div>
            </div>
        </div>
    )
})

export default Message;