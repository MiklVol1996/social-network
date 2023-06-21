import React from "react";
import classes from './formControls.module.css';


export const Input = (bollean) => ({ input, meta, ...props }) => {
    
    const isError = bollean ? meta.touched && meta.error : meta.error;
    
    return(
        <div className={classes.textareaWrap + ' ' + (isError ? classes.error : '')}>
            <input {...props} {...input} />
            <div>
                {isError && <span>{meta.error}</span>}
            </div>
        </div>
    )
    
}