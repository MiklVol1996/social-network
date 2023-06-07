const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE';

const dialogsPageReducer = (state, action) => {

    switch(action.type){
        case ADD_MESSAGE: {
            state.messages.push({id: 4, message: state.newMessageValue});
            state.newMessageValue = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE_VALUE: {
            state.newMessageValue = action.value;
            return state;
        }
        default: {
            return state;
        }
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateMessageValueAC = (text) => ({type: UPDATE_NEW_MESSAGE_VALUE, value: text});

export default dialogsPageReducer;