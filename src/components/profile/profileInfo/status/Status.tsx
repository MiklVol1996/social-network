import React from "react";
import { useState } from "react";
import classes from './status.module.css';
import StatusForm from "./StatusForm";
import edit from '../../../../images/edit.jpg';
import close from '../../../../images/close.jpg';
import { useDispatch, useSelector } from "react-redux";
import { giveStatus } from "../../../../redux/selectors";
import { sendStatusToServer } from "../../../../redux/profilePageReducer";
import { Action } from "redux";

type Props = {
    isOwner: boolean,
}

const Status: React.FC<Props> = React.memo((props) => {

    let [editMode, setEditMode] = useState(false);
    const status = useSelector(giveStatus);
    const dispatch = useDispatch();

    const switchEditMode = () => {
        if (editMode) {
            setEditMode(false);
            return;
        }
        setEditMode(true);
    }

    const onStatusUpdate = (data: string) => {
        switchEditMode();
        dispatch(sendStatusToServer(data) as unknown as Action);
    }

    return (
        <div className={classes.statusWrap}>
            {
                editMode
                    ? <div className={classes.formWrap}>
                        <img src={close} onClick={() => setEditMode(false)} />
                        <StatusForm onStatusUpdate={(data) => onStatusUpdate(data)} 
                        initValue={status as string} />
                    </div>
                    
                    : <div className={classes.statusBodyWrap}>
                        {props.isOwner ? <img src={edit} onClick={() => setEditMode(true)} /> : ''}
                        <div className={classes.statusBody}>{status || '-----'}</div>
                    </div>
            }
        </div>
    )
})

export default Status;