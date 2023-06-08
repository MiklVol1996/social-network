const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT_VALUE = 'UPDATE-POST-TEXT-VALUE';

let initialValue = {
    posts: [{ id: 1, message: 'Come to the dark side...', likesCount: '5' },],
    postTextValue: '',
};

const profilePageReducer = (state = initialValue, action) => {

    switch(action.type){
        case ADD_POST: {
            let newPost = {id: 2, message: state.postTextValue, likesCount: '0'};
            state.posts.push(newPost);
            state.postTextValue = '';
            return state;
        }
        case UPDATE_POST_TEXT_VALUE: {
            state.postTextValue = action.value;
            return state;
        }
        default: {
            return state;
        }
    }
}

export const addPostAC = () => ({type: ADD_POST});
export const updatePostTextValueAC = (text) => ({type: UPDATE_POST_TEXT_VALUE, value: text});

export default profilePageReducer;