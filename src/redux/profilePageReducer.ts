import { apiProfile } from "../api/apiProfile";
import {PhotosProfileType, ProfileType, ResultCodeEnum} from "../types/types";
import { GetActionTypes, ThunkType } from "./store";


let initialValue = {
    posts: [{ id: 1, message: 'Come to the dark side...', likesCount: '5' },],
    profile: null as ProfileType | null,
    status: null as string | null,
};

const profilePageReducer = (state = initialValue, action: ActionsType): InitialValueType => {

    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, { id: 2, message: action.text, likesCount: '0' }],
            }
        }
        case 'SET-PROFILE': {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status,
            }
        }
        case 'SET-NEW-AVA': {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType,
            }
        }
        default: {
            return state;
        }
    }
}

export const actions = {
    addPost: (text: string) => ({ type: 'ADD-POST', text: text } as const),
    setProfile: (profile: ProfileType | null) => ({ type: 'SET-PROFILE', profile: profile } as const),
    setStatus: (status: null | string) => ({ type: 'SET-STATUS', status: status } as const),
    setNewAva: (photos: PhotosProfileType) => ({ type: 'SET-NEW-AVA', photos: photos } as const),
}


export const getUserData = (userId: number): ThunkType<ActionsType> => async (dispatch) => {
    dispatch(actions.setProfile(null));
    const response = await Promise.all([apiProfile.getProfile(userId), apiProfile.getStatus(userId)]);
    dispatch(actions.setProfile(response[0]));
    dispatch(actions.setStatus(response[1]));
}

export const sendStatusToServer = (status: string): ThunkType<ActionsType> => async (dispatch) => {
    const data = await apiProfile.updateStatus(status);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setStatus(status));
    }
}

export const uploadNewPhoto = (photo: any): ThunkType<ActionsType> => async (dispatch) => {
    const response = await apiProfile.updateAva(photo[0]);
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setNewAva(response.data.photos));
    }
}

export const updateProfileData = (): ThunkType<ActionsType> => async (dispatch, getState) => {
    const id = getState().auth.id;
    if (id) {
        const profile = await apiProfile.getProfile(id);
        dispatch(actions.setProfile(profile));
    }
}

export default profilePageReducer;  

type InitialValueType = typeof initialValue;
type ActionsType = GetActionTypes<typeof actions>;