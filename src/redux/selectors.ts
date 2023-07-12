import { AppStateType } from "./store";

export const giveUsers = (state: AppStateType) => {
    return state.userPage.users;
} 

export const giveCurrentPage = (state: AppStateType) => {
    return state.userPage.currentPage;
} 

export const givePageSize = (state: AppStateType) => {
    return state.userPage.pageSize;
} 

export const giveNumOfPages = (state: AppStateType) => {
    return state.userPage.numOfPages;
} 

export const giveIsFetching = (state: AppStateType) => {
    return state.userPage.isFetching;
} 

export const giveFolowInProgAr = (state: AppStateType) => {
    return state.userPage.followingInProgress;
} 

export const giveFilter = (state: AppStateType) => {
    return state.userPage.filter;
} 

export const giveChatMessages = (state: AppStateType) => {
    return state.chatPage.messages;
} 

export const giveLogin = (state: AppStateType) => {
    return state.auth.login;
} 

export const giveCaptchURL = (state: AppStateType) => {
    return state.auth.captchaURL;
} 

export const giveauthID = (state: AppStateType) => {
    return state.auth.id;
} 

export const giveProfile = (state: AppStateType) => {
    return state.profilePage.profile;
} 

export const giveStatus = (state: AppStateType) => {
    return state.profilePage.status;
} 

export const givePosts = (state: AppStateType) => {
    return state.profilePage.posts;
} 

export const giveNews = (state: AppStateType) => {
    return state.newsPage.news;
} 

export const giveNewMessagesCount = (state: AppStateType) => {
    return state.navBar.newMessagesCount;
}

export const giveDialogs = (state: AppStateType) => {
    return state.dialogsPage.dialogs;
}

export const givePrivateMessages = (state: AppStateType) => {
    return state.privateChat.privateMessages;
}

export const giveLastMessageID = (state: AppStateType) => {
    return state.privateChat.lastMessageID;
}

export const giveMyPhoto = (state: AppStateType) => {
    return state.privateChat.myPhoto;
}

export const giveFriendPhoto = (state: AppStateType) => {
    return state.privateChat.friendPhoto;
}

export const giveIsInitialized = (state: AppStateType) => {
    return state.app.isInitialized;
}

export const giveMyName = (state: AppStateType) => {
    return state.auth.myName;
}