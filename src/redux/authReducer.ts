import { apiLogin } from "../api/apiLogin";
import { actions, ActionsType as ActionsTypeFromPfofile } from "./app.reducer";
import { GetActionTypes, ThunkType } from "./store";
import { ResultCodeEnum } from "../types/types";


let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaURL: null as string | null,
}

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET_AUTH_DATA":
        case "SET_CAPTCHA_URL": {
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

export const actionCreators = {
     setAuthData: (login: string | null, id: number | null, email: string | null, isAuth: boolean) => ({ type: 'SET_AUTH_DATA', data: { id, login, email, isAuth } } as const),
     setCaptchaURL: (url: string | null) => ({ type: 'SET_CAPTCHA_URL', data: { captchaURL: url } } as const),
}

export const authMe = (): ThunkType<ActionTypes> => async (dispatch) => {
    const data = await apiLogin.authMe();
    if (data.resultCode === ResultCodeEnum.Success) {
        let { id, email, login } = data.data;
        dispatch(actionCreators.setAuthData(login, id, email, true));
    } else {
        return 'not autorized';
    }
}

export const login = (): ThunkType<ActionTypes | ActionsTypeFromPfofile> => async (dispatch) => {
    dispatch(actionCreators.setCaptchaURL(null));
    const result = await dispatch(authMe());
    if (!result) {
        dispatch(actions.setInitialized(true));
    }
}

export const logout = (): ThunkType<ActionTypes | ActionsTypeFromPfofile> => async (dispatch: any) => {
    const data = await apiLogin.logout();
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setInitialized(false));
        dispatch(actionCreators.setAuthData(null, null, null, false));
    }
}

export default authReducer;

type InitialStateType = typeof initialState;
type ActionTypes = GetActionTypes<typeof actionCreators>;