import { api } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialValue = {
    posts: [{ id: 1, message: 'Come to the dark side...', likesCount: '5' },],
    profile: null,
    status: null,
};

const profilePageReducer = (state = initialValue, action) => {

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
        default: {
            return state;
        }
    }
}

export const addPost = (text) => ({ type: ADD_POST, text: text });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile: profile });
export const setStatus = (status) => ({ type: SET_STATUS, status: status });

export const getUserData = (userId) => async (dispatch) => {
    dispatch(setProfile(null));
    const response = await Promise.all([api.getProfile(userId), api.getStatus(userId)]);
    dispatch(setProfile(response[0]));
    dispatch(setStatus(response[1]));
}

export const sendStatusToServer = (status) => async (dispatch) => {
    const data = await api.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profilePageReducer;