import { GetActionTypes } from './store';
import { authMe } from "./authReducer";
import { ThunkType } from './store';


let initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
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

export const actions = {
    setInitialized: (isInitialized: boolean) => ({ type: 'SET-INITIALIZED', isInitialized: isInitialized } as const),
}


export const getInitialized = (): ThunkType<ActionsType> => async (dispatch) => {
    const response = await dispatch(authMe());
    if (!response) {
        dispatch(actions.setInitialized(true));
    }
}

export default appReducer;

type InitialStateType = typeof initialState;
export type ActionsType = GetActionTypes<typeof actions>;