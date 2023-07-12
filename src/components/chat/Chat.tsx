import React, { useEffect, useRef } from 'react';
import classes from './chat.module.css';
import AddMessageForm from './AddMessageForm';
import Messages from './Messages';
import { startListening } from '../../redux/chatPageReducer';
import { giveChatMessages } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { clearListheners } from '../../redux/chatPageReducer';
import { RefObject, useState } from 'react';
import down from '../../images/Down.png';

const Chat: React.FC = React.memo(() => {

    let [isVisib, setIsVisib] = useState(false);
    const bottomPoint = useRef() as RefObject<HTMLDivElement>;
    const messages = useSelector(giveChatMessages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startListening() as unknown as Action);

        return () => {
            dispatch(clearListheners() as unknown as Action);
        }
    }, [])

    useEffect(() => {
        bottomPoint.current?.scrollIntoView(false);
    }, [messages])

    const onScroll = (e: React.UIEvent) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop > 1000 && !isVisib) {
            setIsVisib(true);
        }
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop < 820 && isVisib) {
            setIsVisib(false);
        }
    }

    const onClick = () => {
        bottomPoint.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
    }

    return (
        <div className={classes.wrap} onScroll={onScroll}>
            <img src={down} className={isVisib ? classes.down : classes.hidden}
                onClick={onClick} />
            <div className={classes.title}>
                Chat messages
            </div>
            <Messages messages={messages} />
            <AddMessageForm />
            <div ref={bottomPoint}></div>
        </div>
    )
})

export default Chat;







