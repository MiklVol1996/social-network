import React from 'react';
import classes from './login.module.css';
import LoginForm from './LoginForm';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Login = ({isAuth, login}) => {

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

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {login})(Login);