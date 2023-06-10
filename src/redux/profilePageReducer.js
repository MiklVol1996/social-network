const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT_VALUE = 'UPDATE-POST-TEXT-VALUE';

let initialValue = {
    posts: [{ id: 1, message: 'Come to the dark side...', likesCount: '5' },],
    postTextValue: '',
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
        default: {
            return state;
        }
    }
}

export const addPost = () => ({type: ADD_POST});
export const updatePostTextValue = (text) => ({type: UPDATE_POST_TEXT_VALUE, value: text});

export default profilePageReducer;