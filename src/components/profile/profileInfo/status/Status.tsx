import React from "react";
import { useState } from "react";
import classes from './status.module.css';
import StatusForm from "./StatusForm";
import edit from '../../../../images/edit.jpg';
import close from '../../../../images/close.jpg';

type Props = {
    sendStatusToServer: (text: string) => void,
    status: string | null,
    isOwner: boolean,
}

const Status: React.FC<Props> = (props) => {

    let [editMode, setEditMode] = useState(false);

    const switchEditMode = () => {
        if (editMode) {
            setEditMode(false);
            return;
        }
        setEditMode(true);
    }

    const onStatusUpdate = (data: string) => {
        switchEditMode();
        props.sendStatusToServer(data);
    }

    return (
        <div className={classes.statusWrap}>
            {
                editMode
                    ? <div className={classes.formWrap}>
                        <img src={close} onClick={() => setEditMode(false)} />
                        <StatusForm onStatusUpdate={(data) => onStatusUpdate(data)} initValue={props.status as string} />
                    </div>

                    : <div className={classes.statusBodyWrap}>
                        {props.isOwner ? <img src={edit} onClick={() => setEditMode(true)} /> : ''}
                        <div className={classes.statusBody}>{props.status || '-----'}</div>
                    </div>
            }
        </div>
    )
}

export default Status;