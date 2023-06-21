import React from "react";
import { useState } from "react";
import classes from './status.module.css';
import { StatusFormRedux } from "./StatusForm";

const Status = (props) => {

    let [editMode, setEditMode] = useState(false);

    const switchEditMode = () => {
        if (editMode) {
            setEditMode(false);
            return;
        }
        setEditMode(true);
    }

    const onStatusUpdate = (data) => {
        switchEditMode();
        props.sendStatusToServer(data);
    }

    return (
        <div className={classes.statusWrap}>
            {
                editMode
                    ? <StatusFormRedux onSubmit={onStatusUpdate}
                        initialValues={{'statusBody': props.status}}
                        onBlur={switchEditMode}/>
                    : <div className={props.isOwner ? classes.span : ''}
                        onDoubleClick={
                            props.isOwner
                                ? switchEditMode
                                : () => ({})
                        }>
                        <div className={classes.statusBody}>{props.status || '-----'}</div>
                    </div>
            }
        </div>
    )
}

export default Status;