const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE';

let initialValue = {
    dialogs: [{ id: 1, name: 'Obi Wan Kenobi' },
    { id: 2, name: 'Magister Yoda' },
    { id: 3, name: 'Han Solo' },],
    messages: [{ id: 1, message: 'Where is Kwaigon??' },
    { id: 2, message: 'May the Force be with you!' },
    { id: 3, message: "I'm going to Tatuin, i need some money" },],
    newMessageValue: '',
};

const dialogsPageReducer = (state = initialValue, action) => {

    switch(action.type){
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: state.newMessageValue}],
                newMessageValue: '',
            }
        }
        case UPDATE_NEW_MESSAGE_VALUE: {
            return {
                ...state,
                newMessageValue: action.value,
            }
        }
        default: {
            return state;
        }
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateMessageValueAC = (text) => ({type: UPDATE_NEW_MESSAGE_VALUE, value: text});

export default dialogsPageReducer;