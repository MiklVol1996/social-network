import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './dialog.module.css';

const Dialog = (props) => {

    function getClassName({ isActive }) {
        return isActive ? classes.active : classes.dialog;
    }

    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`}
                className={getClassName}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;