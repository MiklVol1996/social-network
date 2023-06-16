import { authMe } from "./authReducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZED: {
            return {
                ...state,
                isInitialized: true,
            }
        }
        default: {
            return state;
        }
    }
}

export const setInitialized = () => ({type: SET_INITIALIZED});

export const getInitialized = () => (dispatch) => {
    dispatch(authMe())
    .then(() => {
        dispatch(setInitialized());
    })
}


export default appReducer;