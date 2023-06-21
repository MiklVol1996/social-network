import { api } from "../api/api";
import { stopSubmit } from "redux-form";
import { setInitialized } from "./app.reducer";

const SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaURL: action.url
            }
        }
        default: {
            return state;
        }
    }
}

export const setAuthData = (login, id, email, isAuth) => ({ type: SET_AUTH_DATA, data: { id, login, email, isAuth } });
export const setCaptchaURL = (url) => ({ type: SET_CAPTCHA_URL, url: url });

export const authMe = () => async (dispatch) => {
    const data = await api.authMe();
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthData(login, id, email, true));
    } else {
        return 'not autorized';
    }
}

export const login = (data) => async (dispatch) => {
    const response = await api.login(data);
    if (response.resultCode === 0) {
        dispatch(setCaptchaURL(null));
        const result = await dispatch(authMe());
        if (!result) {
            dispatch(setInitialized(true));
        }
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'some error';
        dispatch(stopSubmit('login', { _error: message }));
        if (response.resultCode === 10) {
            const captchaURL = await api.getCaptchaURL();
            dispatch(setCaptchaURL(captchaURL));
        }
    }
}

export const logout = () => async (dispatch) => {
    const data = await api.logout();
    if (data.resultCode === 0) {
        dispatch(setInitialized(false));
        dispatch(setAuthData(null, null, null, false));
    }
}

export default authReducer;