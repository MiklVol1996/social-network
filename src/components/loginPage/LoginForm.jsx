import React from "react";
import { reduxForm, Field } from "redux-form";
import classes from './loginForm.module.css';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.login}>
                <Field name='login' component='input' placeholder='Enter your login...' />
            </div>
            <div className={classes.password}>
                <Field name='password' component='input' placeholder='Enter your password...' />
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox' /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'login' })(LoginForm);
