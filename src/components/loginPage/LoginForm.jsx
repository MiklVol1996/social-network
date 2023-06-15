import React from "react";
import { reduxForm, Field } from "redux-form";
import classes from './loginForm.module.css';
import { Input } from "../common/formControls/FormsControls";
import { required } from "../../utils/validators";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.login}>
                <Field name='email' component={Input} placeholder='Enter your login...'
                    validate={required} />
            </div>
            <div className={classes.password}>
                <Field name='password' component={Input} placeholder='Enter your password...'
                    validate={required} type='password'/>
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox' /> Remember me
            </div>
            <div className={classes.button}>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'login' })(LoginForm);
