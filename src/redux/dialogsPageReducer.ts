import { GetActionTypes, ThunkType } from "./store";
import { Dialog } from "../types/types";
import { apiDialogs } from "../api/apiDialogsPage";


let initialValue = {
   dialogs: null  as Array<Dialog> | null,
};

const dialogsPageReducer = (state = initialValue, action: ActionsType): DialogsPageInitialValueType => {

    switch(action.type){
        case 'SET-DIALOGS': {
            debugger
            return {
                ...state,
                dialogs: action.dialogs ? [...action.dialogs] : null,
            }
        }
        default: {
            return state;
        }
    }
}

export const actions = {
    setDialogs: (dialogs: Array<Dialog> | null) => ({type: 'SET-DIALOGS', dialogs: dialogs} as const),
}

export const getDialogs = ():ThunkType<ActionsType> => async(dispatch) => {
    const response = await apiDialogs.getDialogs();
    if(response.data.length){
        dispatch(actions.setDialogs(response.data));
    }
}

export default dialogsPageReducer;

export type DialogsPageInitialValueType = typeof initialValue;
type ActionsType = GetActionTypes<typeof actions>;