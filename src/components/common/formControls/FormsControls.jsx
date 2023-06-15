import React from "react";
import classes from './formControls.module.css';

export const Input = ({ input, meta, ...props }) => {

    const isError = meta.touched && meta.error;

    return (
        <div className={classes.textareaWrap + ' ' + (isError? classes.error : '')}>
            <input {...props} {...input} />
            <div>
                {isError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}