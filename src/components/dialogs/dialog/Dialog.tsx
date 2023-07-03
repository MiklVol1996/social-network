import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './dialog.module.css';

type Props = {
    id: number,
    name: string,
}

const Dialog: React.FC<Props> = (props) => {

    function getClassName({ isActive }: {isActive: boolean}) {
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