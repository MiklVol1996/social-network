import React from "react";
import { reduxForm } from "redux-form";
import classes from './loginForm.module.css';
import { Input } from "../common/formControls/FormsControls";
import { required } from "../../utils/validators";
import { createField } from "../common/fieldCreator/createField";


const elem = Input(true);

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.login}>
                {createField('email', elem, 'Enter your login...', [required])}
            </div>
            <div className={classes.password}>
                {createField('password', elem, 'Enter your password...', [required], 
                'password')}
            </div>
            {
                props.error
                    ? <div className={classes.error}>
                        {props.error}
                    </div>
                    : ''
            }
            {createField('rememberMe', 'input', '', [], 'checkbox', 'Remember me')}
            <div className={classes.button}>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'login' })(LoginForm);
