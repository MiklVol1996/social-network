import { authMe } from "./authReducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

type InitialStateType = typeof initialState;
   
let initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action: setInitializedActionType): InitialStateType => {
    switch (action.type) {
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

type setInitializedActionType = {
    type: typeof SET_INITIALIZED,
    isInitialized: boolean,
}

export const setInitialized = (isInitialized: boolean): setInitializedActionType => ({ type: SET_INITIALIZED, isInitialized: isInitialized });

export const getInitialized = () => async (dispatch: any) => {

    const response = await dispatch(authMe());
    if (!response) {
        dispatch(setInitialized(true));
    }
}


export default appReducer;