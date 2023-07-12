import { MessageType } from "../types/types";
import { GetActionTypes, ThunkType } from "./store";
import { apiChat } from "../api/apiWebSocketCHat";

let initialState = {
    messages: [] as Array<MessageType>,
}

const chatReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
       
        case "SET_MESSAGES": {
            return {
                ...state,
                messages: [...state.messages, ...action.data],
            }
        }
        default: {
            return state;
        }
    }
}

export const actionCreators = {
     setMessages: (messages: Array<MessageType>) => ({ type: "SET_MESSAGES", data: messages } as const),
}

export const startListening = (): ThunkType<ActionTypes> => async (dispatch) => {
   apiChat.start();
   apiChat.subscribe((messages: Array<MessageType>) => dispatch(actionCreators.setMessages(messages)));
}

export const sendMessage = (text: string): ThunkType<ActionTypes> => async (dispatch) => {
   apiChat.send(text);
 }

export const clearListheners = (): ThunkType<ActionTypes> => async (dispatch) => {
    apiChat.clearMessageSubsriber();
  }
 
export default chatReducer;

type InitialStateType = typeof initialState;
type ActionTypes = GetActionTypes<typeof actionCreators>;