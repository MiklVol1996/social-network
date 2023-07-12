import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Action } from 'redux';
import { getDialogs } from '../../redux/dialogsPageReducer';
import { giveDialogs, giveNewMessagesCount } from '../../redux/selectors';
import classes from './dialogsList.module.css';
import defAva from '../../images/defaultAva.jpg';
import { parceDate } from '../utils/dateParse';
import { actions } from '../../redux/navBarReducer';
import Preloader from '../common/preloader/Preloader';

const DialogsList:React.FC = React.memo(() => {

    const dispatch = useDispatch();
    const dialogs = useSelector(giveDialogs);
    const newMesCount = useSelector(giveNewMessagesCount);

    useEffect(() => {
        dispatch(getDialogs() as unknown as Action);
    }, [newMesCount]);

    const history = useNavigate();

    const onClick = (id: number, newMesNumber: number) => {
        dispatch(actions.setNewMessagesCount(newMesCount - newMesNumber));
        history('/private/' + id);
    }

    return (
        <div className={classes.wrap}>
            {
                dialogs
                    ?
                    (dialogs.length
                        ?
                        dialogs.map(dialog => {
                            return (
                                <div className={classes.flex} key={dialog.id}
                                    onClick={() => onClick(dialog.id, dialog.newMessagesCount)}>
                                    <div className={classes.imgWrap}>
                                        <img src={dialog.photos.large ? dialog.photos.large : defAva} />
                                    </div>
                                    <div className={classes.infoWrap}>
                                        <div className={classes.name}>
                                            {dialog.userName}
                                            {
                                                dialog.newMessagesCount > 0
                                                    ? <div className={classes.notif}>{dialog.newMessagesCount + ' ' + 'new messages'}</div>
                                                    : ''
                                            }
                                        </div>
                                        <div className={classes.info}>
                                            last activity:&nbsp;{parceDate(dialog.lastUserActivityDate)}
                                        </div>
                                    </div>

                                </div>

                            )
                        })
                        : <div>
                            <h1>You havent got any dialogs</h1>
                            <h2>Start chatting with <span onClick={() => <Navigate to='users' />}>users</span></h2>
                        </div>)
                    : <Preloader />
            }
        </div >
    )
})

export default DialogsList;