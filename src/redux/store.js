import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    userPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;