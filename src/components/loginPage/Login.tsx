import React from 'react';
import classes from './login.module.css';
import LoginForm from './LoginForm';

type Props = {
  login: () => void,
  captchaURL: string | null,
  setCaptchaURL: (captcha: string | null) => void,
}

const Login: React.FC<Props> = (props) => {
  return (
    <div className={classes.loginWrap}>
      <div className={classes.loginContent}>
        <h1>Login</h1>
        <LoginForm {...props} />
      </div>
    </div>
  )
}

export default Login;