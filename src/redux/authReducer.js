import { api } from "../api/api";
import { stopSubmit } from "redux-form";
import { setInitialized } from "./app.reducer";

const SET_AUTH_DATA = 'SET-AUTH-DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
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

export const setAuthData = (login, id, email, isAuth) => ({ type: SET_AUTH_DATA, data: { id, login, email, isAuth } });

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
        const result = await dispatch(authMe());
        if (!result) {
            dispatch(setInitialized(true));
        }
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'some error';
        dispatch(stopSubmit('login', { _error: message }));
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