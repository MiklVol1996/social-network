import React from 'react';
import classes from './button.module.css';

type PropsType = {
    children: string,
    onClick?: () => void,
    disabled?: boolean,
}

const Button: React.FC<PropsType> = React.memo(({ children, onClick, disabled }) => {
    return (
        <div className={classes.buttonWrap}>
            <button disabled={disabled} onClick={onClick}>
                {children}
            </button>
        </div>
    )
})

export default Button;