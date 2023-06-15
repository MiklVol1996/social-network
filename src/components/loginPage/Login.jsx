import React from 'react';
import classes from './login.module.css';
import LoginForm from './LoginForm';

const onSubmit = (data) => {
  console.log(data);
}

const Login = () => {
  return (
    <div className={classes.loginWrap}>
      <div className={classes.loginContent}>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

export default Login;