import { GetActionTypes } from "./store";
import { ThunkType } from "./store";
import { navBarApi } from "../api/apiNavBar";

let initialState = {
    newMessagesCount: 0,
}

const navBarReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-NEW-MESSAGES-COUNT': {
            return {
                ...state,
                newMessagesCount: action.newMessagesCount,
            }
        }
        default: {
            return state;
        }
    }
}

export const actions = {
    setNewMessagesCount: (newMessagesCount: number) => ({ type: 'SET-NEW-MESSAGES-COUNT', newMessagesCount: newMessagesCount } as const),
}

let intervalID: ReturnType<typeof setInterval>;

export const startCheckingNewMessages = (): ThunkType<ActionsType> => async (dispatch, getState) => {
    async function getNewMessages(){
        const messagesCount = await navBarApi.getNewMessagesList();
        if(getState().navBar.newMessagesCount !== messagesCount){
          dispatch(actions.setNewMessagesCount(messagesCount))
        }
    }
    getNewMessages();
    intervalID = setInterval(getNewMessages, 4000);
}

export const stopCheckingNewMessages = (): ThunkType<ActionsType> => async (dispatch, getState) => {
    clearInterval(intervalID);
}

export default navBarReducer;

type InitialStateType = typeof initialState;
export type ActionsType = GetActionTypes<typeof actions>;