import { api } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT_VALUE = 'UPDATE-POST-TEXT-VALUE';
const SET_PROFILE = 'SET-PROFILE';

let initialValue = {
    posts: [{ id: 1, message: 'Come to the dark side...', likesCount: '5' },],
    postTextValue: '',
    profile: null,
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
        default: {
            return state;
        }
    }
}

export const addPost = () => ({type: ADD_POST});
export const updatePostTextValue = (text) => ({type: UPDATE_POST_TEXT_VALUE, value: text});
export const setProfile = (profile) => ({type: SET_PROFILE, profile: profile});

export const getProfile = (userId) => (dispatch) => {
    dispatch(setProfile(null));
    api.getProfile(userId)
    .then(data => {
        dispatch(setProfile(data));
    })
}

export default profilePageReducer;