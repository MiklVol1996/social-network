import React from "react";
import classes from './customInput.module.css';


type InputProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    value?: string;
    name: string;
    error?: string | undefined
    autoFocus?: boolean,
    type?: string,
    placeholder?: string,
}


const Input: React.FC<InputProps> = React.memo((props) => {
    const error = props.error;
    return (
        <div className={classes.inputWrap}>
            <div className={error ? classes.inputError : classes.input}>
                <input {...props} />
            </div>
            {error ? <div className={classes.error}>{error}</div> : ''}
        </div>
    )
})

export default Input;