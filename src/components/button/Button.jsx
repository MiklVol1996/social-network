import React from 'react';
import classes from './button.module.css';

const Button = ({ children, onClick, disabled }) => {
    return (
        <div className={classes.buttonWrap}>
            <button disabled={disabled} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}


export default Button;