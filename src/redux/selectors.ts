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