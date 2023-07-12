import React from 'react';
import classes from './login.module.css';
import LoginForm from './LoginForm';


const Login: React.FC = React.memo(() => {
  return (
    <div className={classes.loginWrap}>
      <div className={classes.loginContent}>
        <h1>Login</h1>
        <LoginForm />
        <div className={classes.free}>
          <div className={classes.title}>Login data for a guest account:</div>
          <div><span>Email:</span>&nbsp;&nbsp;free@samuraijs.com</div>
          <div><span>Password:</span>&nbsp;&nbsp;free</div>
        </div>
      </div>
    </div>
  )
})

export default Login;