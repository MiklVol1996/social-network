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
    switch (action.type){
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

export const setAuthData = (login, id, email, isAuth) => ({type: SET_AUTH_DATA, data: {id, login, email, isAuth}});

export const authMe = () => (dispatch) => {
    return api.authMe()
    .then(data => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthData(login, id, email, true));
        }else{
            return 'not autorized';
        }
    });
}

export const login = (data) => (dispatch) => {
    api.login(data)
    .then(data => {
        if(data.resultCode === 0){
            dispatch(authMe())
            .then((i) => {
                if(!i){
                 dispatch(setInitialized(true));
                }})
        }else{
            let message = data.messages.length > 0 ? data.messages[0] : 'some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    })
}

export const logout = () => (dispatch) => {
    api.logout()
    .then(data => {
        if(data.resultCode === 0){
            dispatch(setAuthData(null, null, null, false));
            dispatch(setInitialized(false));
        }
    })
}

export default authReducer;