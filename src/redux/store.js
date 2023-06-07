import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

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
            { id: 3, message: "I'm going to Tatuin, i need some money" },],
            newMessageValue: '',
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
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._callSubscriber( this._state);
    }
}

export default store;