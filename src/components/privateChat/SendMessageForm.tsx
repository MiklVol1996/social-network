import React from 'react';
import { useState } from 'react';
import Button from '../common/button/Button';
import { sendNewPrivateMessages } from '../../redux/privateChatReducer';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import classes from'./sendMesForm.module.css';

const SendMessageForm: React.FC<{id: string | undefined}> = React.memo(({id}) => {

    let [text, setText] = useState('');
    const dispatch = useDispatch();

    const onClick = (id: number, text: string) => {
        if (text) {
            dispatch(sendNewPrivateMessages(id, text) as unknown as Action);
            setText('');
        }
    }

    return (
        <div className={classes.wrap}>
            <input value={text} placeholder='Enter your message...'
                onChange={(e) => setText(e.target.value)} />
            <Button onClick={() => {
                //@ts-ignore
                onClick(+id, text)
            }}>Send</Button>
        </div>
    )
})

export default SendMessageForm;