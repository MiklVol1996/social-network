import React from "react";
import { useState, ChangeEvent } from "react";
import Button from "../common/button/Button";
import { sendMessage } from "../../redux/chatPageReducer";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import classes from './addMesForm.module.css';

const AddMessageForm: React.FC = React.memo(() => {

    let [text, setText] = useState('');
    const dispatch = useDispatch();

    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onClick = () => {
        if (text) {
            dispatch(sendMessage(text) as unknown as Action);
            setText('');
        }
    }

    return (
        <div className={classes.form}>
            <div className={classes.flex}>
                <input value={text} onChange={onTextChange} placeholder='Enter your message...' />
                <Button onClick={onClick} >Send</Button>
            </div>
            <div className={classes.hidden}></div>
        </div>
    )
})

export default AddMessageForm;