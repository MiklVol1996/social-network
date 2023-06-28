import { api } from "../api/api";
import { stopSubmit } from "redux-form";
import { handleErrors } from "../utils/apiErrorsHandler";
import { PhotosProfileType, ProfileType, ProfileTypeWithoutPhotos } from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_NEW_AVA = 'SET-NEW-AVA';

let initialValue = {
    posts: [{ id: 1, message: 'Come to the dark side...', likesCount: '5' },],
    profile: null as ProfileType | null,
    status: null as string | null,
};

type InitialValueType = typeof initialValue;

const profilePageReducer = (state = initialValue, action: ActionsTypes): InitialValueType => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 2, message: action.text, likesCount: '0' }],
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SET_NEW_AVA: {
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

type ActionsTypes = addPostActionType | setProfileActionType | setStatusActionType | setNewAvaActionType;

type addPostActionType = { type: typeof ADD_POST, text: string };
export const addPost = (text: string): addPostActionType => ({ type: ADD_POST, text: text });
type setProfileActionType = { type: typeof SET_PROFILE, profile: ProfileType | null };
export const setProfile = (profile: ProfileType | null): setProfileActionType => ({ type: SET_PROFILE, profile: profile });
type setStatusActionType = { type: typeof SET_STATUS, status: null | string };
export const setStatus = (status: null | string): setStatusActionType => ({ type: SET_STATUS, status: status });
type setNewAvaActionType = { type: typeof SET_NEW_AVA, photos: any }
export const setNewAva = (photos: PhotosProfileType): setNewAvaActionType => ({ type: SET_NEW_AVA, photos: photos });

export const getUserData = (userId: number) => async (dispatch: any) => {
    dispatch(setProfile(null));
    const response = await Promise.all([api.getProfile(userId), api.getStatus(userId)]);
    dispatch(setProfile(response[0]));
    dispatch(setStatus(response[1]));
}

export const sendStatusToServer = (status: string) => async (dispatch: any) => {
    const data = await api.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const uploadNewPhoto = (photo: any) => async (dispatch: any) => {
    const response = await api.updateAva(photo[0]);
    debugger
    if (response.resultCode === 0) {
        dispatch(setNewAva(response.data.photos));
    }
}

export const updateProfileData = (data: ProfileTypeWithoutPhotos) => async (dispatch: any, getState: any) => {
    const id = getState().auth.id;
    const profile = await api.getProfile(id);
    dispatch(setProfile(profile));
}

export default profilePageReducer;