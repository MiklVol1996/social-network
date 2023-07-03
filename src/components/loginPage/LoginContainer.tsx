import { login, actionCreators } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import Login from './Login';


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    captchaURL: state.auth.captchaURL,
  }
}

const setCaptchaURL = actionCreators.setCaptchaURL;

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
  { login, setCaptchaURL })(Login);

type MapStateToPropsType = {
  captchaURL: string | null,
}

type MapDispatchToPropsType = {
  login: () => void,
  setCaptchaURL: (captcha: string | null) => void,
}