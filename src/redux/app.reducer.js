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
                isInitialized: action.isInitialized,
            }
        }
        default: {
            return state;
        }
    }
}

export const setInitialized = (isInitialized) => ({type: SET_INITIALIZED, isInitialized: isInitialized});

export const getInitialized = () => (dispatch) => {
    dispatch(authMe())
    .then((i) => {
       if(!i){
        dispatch(setInitialized(true));
       }  
    })
}


export default appReducer;