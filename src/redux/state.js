const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT_VALUE = 'UPDATE-POST-TEXT-VALUE';

const store = {
    _state: {
        profilePage: {
            posts: [{ id: 1, message: 'Come to the dark side...', likesCount: '5' },],
            postTextValue: '',
        },
        dialogsPage: {
            dialogs: [{ id: 1, name: 'Obi Wan Kenobi' },
            { id: 2, name: 'Magister Yoda' },
            { id: 3, name: 'Han Solo' },],
            messages: [{ id: 1, message: 'Where is Kwaigon??' },
            { id: 2, message: 'May the Force be with you!' },
            { id: 3, message: "I'm going to Tatuin, i need some money" },]
        }
    },

    _callSubscriber: null,

    getState(){
        return this._state
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        switch(action.type){
            case 'ADD-POST': {
                let newPost = {id: 2, message: this._state.profilePage.postTextValue, likesCount: '0'};
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.postTextValue = '';
                this._callSubscriber(this._state);
                break;
            }
            case 'UPDATE-POST-TEXT-VALUE': {
                this._state.profilePage.postTextValue = action.value;
                this._callSubscriber(this._state);
                break;
            }
        }
    }
}

export const addPostAC = () => ({type: 'ADD-POST'});
export const updatePostTextValueAC = (text) => ({type: 'UPDATE-POST-TEXT-VALUE', value: text});

export default store;