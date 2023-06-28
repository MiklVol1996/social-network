import { api } from "../api/api";
import { stopSubmit } from "redux-form";
import { setInitialized } from "./app.reducer";
import { ResultCodeEnum, ResultCodeWithCaptchaEnum } from "../api/api";
import type { LoginDataType } from "../types/types";


const SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

type InitialStateType = typeof initialState;


let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaURL: null as string | null,
}

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.data,
            }
        }
        default: {
            return state;
        }
    }
}

type setAuthDataActionType = {
    type: typeof SET_AUTH_DATA,
    data: {
        id: null | number,
        login: null | string,
        email: null | string,
        isAuth: boolean,
    }
}

type setCaptchaURLActionType = {
    type: typeof SET_CAPTCHA_URL,
    data: {
        captchaURL: string | null,
    }
}

type ActionTypes = setAuthDataActionType | setCaptchaURLActionType;

export const setAuthData = (login: string | null, id: number | null, email: string | null, isAuth: boolean): setAuthDataActionType => ({ type: SET_AUTH_DATA, data: { id, login, email, isAuth } });
export const setCaptchaURL = (url: string | null): setCaptchaURLActionType => ({ type: SET_CAPTCHA_URL, data: { captchaURL: url } });

export const authMe = () => async (dispatch: any) => {
    const data = await api.authMe();
    if (data.resultCode === ResultCodeEnum.Success) {
        let { id, email, login } = data.data;
        dispatch(setAuthData(login, id, email, true));
    } else {
        return 'not autorized';
    }
}

export const login = () => async (dispatch: any) => {
    dispatch(setCaptchaURL(null));
    const result = await dispatch(authMe());
    if (!result) {
        dispatch(setInitialized(true));
    }
}

export const logout = () => async (dispatch: any) => {
    const data = await api.logout();
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setInitialized(false));
        dispatch(setAuthData(null, null, null, false));
    }
}

export default authReducer;