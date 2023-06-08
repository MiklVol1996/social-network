import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
});

let store = createStore(reducers);



export default store;