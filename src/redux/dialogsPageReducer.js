const ADD_MESSAGE = 'ADD-MESSAGE';

let initialValue = {
    dialogs: [{ id: 1, name: 'Obi Wan Kenobi' },
    { id: 2, name: 'Magister Yoda' },
    { id: 3, name: 'Han Solo' },],
    messages: [{ id: 1, message: 'Where is Kwaigon??' },
    { id: 2, message: 'May the Force be with you!' },
    { id: 3, message: "I'm going to Tatuin, i need some money" },],
};

const dialogsPageReducer = (state = initialValue, action) => {

    switch(action.type){
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.message}],
            }
        }
        default: {
            return state;
        }
    }
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message: message});

export default dialogsPageReducer;