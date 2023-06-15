import { api } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT_VALUE = 'UPDATE-POST-TEXT-VALUE';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialValue = {
    posts: [{ id: 1, message: 'Come to the dark side...', likesCount: '5' },],
    postTextValue: '',
    profile: null,
    status: null,
};

const profilePageReducer = (state = initialValue, action) => {

    switch(action.type){
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 2, message: state.postTextValue, likesCount: '0'}],
                postTextValue: '',
            }
        }
        case UPDATE_POST_TEXT_VALUE: {
            return {
                ...state,
                postTextValue: action.value,
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

export const addPost = () => ({type: ADD_POST});
export const updatePostTextValue = (text) => ({type: UPDATE_POST_TEXT_VALUE, value: text});
export const setProfile = (profile) => ({type: SET_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status: status});

export const getProfile = (userId) => (dispatch) => {
    dispatch(setProfile(null));
    api.getProfile(userId)
    .then(data => {
        dispatch(setProfile(data));
    })
}

export const getStatus = (id) => (dispatch) => {
    api.getStatus(id)
    .then(data => {
        dispatch(setStatus(data)); 
    })
}

export const sendStatusToServer = (status) => (dispatch) => {
    api.updateStatus(status)
    .then(data => {
       if(data.resultCode === 0){
        dispatch(setStatus(status));
       } 
    })
}



export default profilePageReducer;