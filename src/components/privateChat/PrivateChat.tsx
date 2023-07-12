import React, { useEffect, useRef, useState, RefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Action } from 'redux';
import {
    giveLogin, giveNewMessagesCount, givePrivateMessages,
    giveLastMessageID, giveMyPhoto, giveFriendPhoto
} from '../../redux/selectors';
import {
    actions as actionsDialog, checkingNewMessages, getPrivateMessages,
    getNextPortion
} from '../../redux/privateChatReducer';
import Preloader from '../common/preloader/Preloader';
import { parceTime } from '../utils/parceMessageAddTime';
import classes from './privateChat.module.css';
import SendMessageForm from './SendMessageForm';
import down from '../../images/Down.png';
import defAva from '../../images/defaultAva.jpg';

const PrivateChat: React.FC = React.memo(() => {

    let [isTopVisib, setIsTopVisib] = useState(false);
    let [isBottomVisib, setIsBottomVisib] = useState(true);
    let [isDownVisib, setIsDownVisib] = useState(false);

    const ref = useRef() as RefObject<HTMLDivElement>;
    const lastMes = useRef() as RefObject<HTMLDivElement>;

    const { id } = useParams();
    const dispatch = useDispatch();

    const messages = useSelector(givePrivateMessages);
    const lastMesID = useSelector(giveLastMessageID);
    const login = useSelector(giveLogin);
    const newMessCount = useSelector(giveNewMessagesCount);
    const myPhoto = useSelector(giveMyPhoto);
    let friendPhoto = useSelector(giveFriendPhoto);
    if (!friendPhoto) {
        friendPhoto = defAva;
    }
debugger
    useEffect(() => {
        if (isTopVisib) {
            if (id) { dispatch(getNextPortion(+id) as unknown as Action) }
        }
    }, [isTopVisib])

    useEffect(() => {
        if (id) { dispatch(getPrivateMessages(+id) as unknown as Action) }
        return () => { dispatch(actionsDialog.setprivateMessages(null)) }
    }, []);

    useEffect(() => {
        if (id) { dispatch(checkingNewMessages(+id) as unknown as Action) }
    }, [newMessCount]);

    useEffect(() => {
        if (isBottomVisib) { ref.current?.scrollIntoView(false) }
        if (!isBottomVisib) { lastMes.current?.scrollIntoView(true) }
        if(!messages?.length){
            debugger
            ref.current?.scrollIntoView(true)
        }
    }, [messages]);

    const onscroll = (e: React.UIEvent) => {
        const height = e.currentTarget.scrollHeight;
        const top = e.currentTarget.scrollTop;
        console.log(height, top, window.screen.height);
        
        if (!top && !isTopVisib) { setIsTopVisib(true) }
        if (top && isTopVisib) { setIsTopVisib(false) }
        if (height - top < (window.screen.height / 1.16) && !isBottomVisib) { setIsBottomVisib(true) }
        if (height - top > (window.screen.height / 1.16) && isBottomVisib) { setIsBottomVisib(false) }
        if (height - top > (window.screen.height  * 1.35)) { setIsDownVisib(true) }
        if (height - top < (window.screen.height * 1.35)) { setIsDownVisib(false) }
    }

    const onClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" })
    }

    return (
        <div className={classes.wrap} onScroll={onscroll}>
            {
                messages ?
                    (messages.length
                        ?
                        <div>
                            {messages.map(message => {
                                return (
                                    <div className={message.senderName === login ? classes.flexMe : classes.flexFriend}>
                                        <div ref={message.id === lastMesID ? lastMes : null}
                                            className={message.senderName === login ? classes['me'] : classes['friend']}
                                            key={message.id}>
                                            <div className={classes.flex}>
                                                <div className={classes.body}>{message.body}</div>
                                                <div className={classes.innerFlex}>
                                                    <div className={classes.mesInfo}>
                                                        <div>{message.senderName}</div>
                                                        <div>{parceTime(message.addedAt)} </div>
                                                    </div>
                                                    <img src={message.senderName === login ? (myPhoto ? myPhoto : defAva ) as string : friendPhoto as string}
                                                        className={classes.ava} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <SendMessageForm id={id} />
                            <div ref={ref}></div>
                        </div>
                        :
                        <div className={classes.empty}>
                            <div ref={ref}></div>
                            <div className={classes.emptyMes}>The list of mesages is empty</div>
                            <SendMessageForm id={id}/>
                        </div>)
                    : <Preloader />
            }
            <img src={down} className={isDownVisib ? classes.down : classes.hidden} onClick={onClick} />
        </div>
    )
})

export default PrivateChat;