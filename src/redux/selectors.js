export const giveUsers = (state) => {
    return state.userPage.users;
} 

export const giveCurrentPage = (state) => {
    return state.userPage.currentPage;
} 

export const givePageSize = (state) => {
    return state.userPage.pageSize;
} 

export const giveNumOfPages = (state) => {
    return state.userPage.numOfPages;
} 

export const giveIsFetching = (state) => {
    return state.userPage.isFetching;
} 

export const giveFolowInProgAr = (state) => {
    return state.userPage.followingInProgress;
} 