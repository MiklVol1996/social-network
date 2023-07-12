import { Action, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import appReducer from "./app.reducer";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { ThunkAction } from "redux-thunk";
import chatReducer from "./chatPageReducer";
import newsPageReducer from "./newsReducer";
import navBarReducer from "./navBarReducer";
import privateChatReducer from "./privateChatReducer";


let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    userPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chatPage: chatReducer,
    newsPage: newsPageReducer,
    navBar: navBarReducer,
    privateChat: privateChatReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

let store = createStore(rootReducer, applyMiddleware(thunk));

export type GetActionTypes<T> = T extends { [key: string]: (...arg: any) => infer U } ? U : never;
export type ThunkType<A extends Action> = ThunkAction<Promise<void | string>, AppStateType, {}, A>;


export default store;