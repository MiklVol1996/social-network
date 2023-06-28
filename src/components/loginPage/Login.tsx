import React from 'react';
import classes from './login.module.css';
import LoginForm from './LoginForm';
import { login, setCaptchaURL } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';

type MapStateToPropsType = {
  captchaURL: string | null,
}

type MapDispatchToPropsType = {
  login: () => void,
  setCaptchaURL: (url: string | null) => void,
}


const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({ login, captchaURL, setCaptchaURL }) => {

  return (
    <div className={classes.loginWrap}>
      <div className={classes.loginContent}>
        <h1>Login</h1>
        <LoginForm login={login} captchaURL={captchaURL} setCaptchaURL={setCaptchaURL}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => {
  return {
    captchaURL: state.auth.captchaURL,
  }
}

export default connect(mapStateToProps, { login, setCaptchaURL })(Login);