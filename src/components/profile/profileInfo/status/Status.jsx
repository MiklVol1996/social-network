import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from './status.module.css';

const Status = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const switchEditMode = () => {
        if (editMode) {
            setEditMode(false);
            return;
        }
        setEditMode(true);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    const onBlur = () => {
        switchEditMode();
        if (status !== props.status) {
            props.sendStatusToServer(status);
        }
    }

    const isMyID = () => {
        return props.id === 29133;
    }

    return (
        <div className={classes.statusWrap}>
            {
                editMode
                    ? <div>
                        <input value={status}
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={onBlur} />
                    </div>
                    : <div className={isMyID() ? classes.span : ''}
                        onDoubleClick={
                            isMyID()
                                ? switchEditMode
                                : () => ({})
                        }>
                        <span>{status || '-----'}</span>
                    </div>
            }
        </div>
    )
}

export default Status;