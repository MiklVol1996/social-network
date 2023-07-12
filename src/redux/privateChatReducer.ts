import { privateMessage, ResultCodeEnum } from "../types/types";
import { GetActionTypes, ThunkType } from "./store";
import { apiDialogs } from "../api/apiDialogsPage";
import { apiProfile } from '../api/apiProfile';

let initialValue = {
    privateMessages: null as Array<privateMessage> | null,
    pageSize: 20,
    totalPagesCount: 1,
    lastDownloadedPortion: 1,
    lastMessageID: null as string | null,
    myPhoto: null as string | null,
    friendPhoto: null as string | null,
};

const privateChatReducer = (state = initialValue, action: ActionsType): privateMesInitialValue => {

    switch (action.type) {
        case 'SET-PRIVATE-MESSAGES': {
            if(action.privateMessages === null){
                return {
                    ...state,
                    privateMessages: null,
                }
            }
            if(!state.privateMessages){
                return {
                    ...state,
                    privateMessages: [...action.privateMessages],
                }
            }else{
                if(action.isOld){
                    return {
                        ...state,
                        privateMessages: [...action.privateMessages, ...state.privateMessages],
                    }
                }else{
                    return {
                        ...state,
                        privateMessages: [...state.privateMessages, ...action.privateMessages],
                    }
                }
            }
        }
        case 'ADD-NEW-PRIVATE-MESSAGE': {
            return {
                ...state,
                privateMessages: state.privateMessages ? [...state.privateMessages, action.message] : [action.message],
            }
        }
        case 'SET-TOTAL-PRIVATE-PAGES-COUNT': {
            return {
                ...state,
                totalPagesCount: action.count,
            }
        }
        case 'SET-LAST-DOWNLOADED-PORTION': {
            return {
                ...state,
                lastDownloadedPortion: action.portion,
            }
        }
        case 'SET-LAST-MESSAGE-ID': {
            return {
                ...state,
                lastMessageID: action.id,
            }
        }
        case 'SET-MY-PHOTO': {
            return {
                ...state,
                myPhoto: action.photo,
            }
        }
        case 'SET-FRIEND-PHOTO': {
            return {
                ...state,
                friendPhoto: action.photo,
            }
        }
        default: {
            return state;
        }
    }
}

export const actions = {
    setprivateMessages: (privateMessages: Array<privateMessage> | null, isOld?: boolean) => ({ type: 'SET-PRIVATE-MESSAGES', privateMessages: privateMessages, isOld: isOld } as const),
    addNewPrivateMEssage: (message: privateMessage) => ({ type: 'ADD-NEW-PRIVATE-MESSAGE', message: message } as const),
    setTotalPagesCount: (count: number) => ({ type: 'SET-TOTAL-PRIVATE-PAGES-COUNT', count: count } as const),
    setLastDownloadedPortion: (portion: number) => ({ type: 'SET-LAST-DOWNLOADED-PORTION', portion: portion } as const),
    setLastMessageID: (id: string | null) => ({ type: 'SET-LAST-MESSAGE-ID', id: id } as const),
    setMyPhoto: (photo: string) => ({ type: 'SET-MY-PHOTO', photo: photo } as const),
    setFriendPhoto: (photo: string) => ({ type: 'SET-FRIEND-PHOTO', photo: photo } as const),
}

export const getPrivateMessages = (id: number): ThunkType<ActionsType> => async (dispatch, getState) => {
    const myProfile = await apiProfile.getProfile(getState().auth.id as number);
    dispatch(actions.setMyPhoto(myProfile.photos.large as string));
    const friendProfile = await apiProfile.getProfile(id);
    dispatch(actions.setFriendPhoto(friendProfile.photos.large as string));
    const pageSize = getState().privateChat.pageSize;
    const response = await apiDialogs.getMessages(id, 1, pageSize);
    dispatch(actions.setTotalPagesCount(Math.ceil(response.totalCount / 20)));
    dispatch(actions.setLastDownloadedPortion(1));
    dispatch(actions.setprivateMessages(response.items));
}

export const checkingNewMessages = (id: number): ThunkType<ActionsType> => async (dispatch) => {
    const response = await apiDialogs.getDialogs();
    const dialog = response.data.find(dialog => dialog.id === id);
    if (dialog?.newMessagesCount) {
        const response = await apiDialogs.getMessages(id, undefined, dialog.newMessagesCount);
        dispatch(actions.setprivateMessages(response.items, false));
    }
}

export const getNextPortion = (id: number): ThunkType<ActionsType> => async (dispatch, getState) => {
    const totalPagesCount = getState().privateChat.totalPagesCount;
    const lastDownloadedPortion = getState().privateChat.lastDownloadedPortion;
    const pageSize = getState().privateChat.pageSize;
    if (lastDownloadedPortion < totalPagesCount) {
        const response = await apiDialogs.getMessages(id, lastDownloadedPortion + 1, pageSize);
        dispatch(actions.setLastDownloadedPortion(lastDownloadedPortion + 1));
        dispatch(actions.setLastMessageID(response.items[response.items.length - 1].id));
        dispatch(actions.setprivateMessages(response.items, true));
    }
}

export const sendNewPrivateMessages = (id: number, message: string): ThunkType<ActionsType> => async (dispatch) => {
    const response = await apiDialogs.sendMessage(id, message);
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.addNewPrivateMEssage(response.data.data.message));
    }
}

export default privateChatReducer;

export type privateMesInitialValue = typeof initialValue;
type ActionsType = GetActionTypes<typeof actions>;