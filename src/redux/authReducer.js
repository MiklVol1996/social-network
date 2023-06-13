import { api } from "../api/api";

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
                isAuth: true,
            }
        }
        default: {
            return state;
        }
    }
}

export const setAuthData = (login, id, email) => ({type: SET_AUTH_DATA, data: {id, login, email}});

export const authMe = () => (dispatch) => {
    api.authMe()
    .then(data => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthData(login, id, email));
        }
    });
}

export default authReducer;