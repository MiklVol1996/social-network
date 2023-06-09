import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    userPage: usersPageReducer,
});

let store = createStore(reducers);



export default store;