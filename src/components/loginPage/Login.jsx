import React from 'react';
import classes from './login.module.css';
import LoginForm from './LoginForm';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';

const Login = ({login}) => {

  const onSubmit = (data) => {
    login(data);
  }

  return (
    <div className={classes.loginWrap}>
      <div className={classes.loginContent}>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}


export default connect(null, {login})(Login);