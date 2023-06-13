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

export default authReducer;