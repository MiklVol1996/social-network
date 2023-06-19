import { api } from "../api/api";

const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_NUM_OF_PAGES = 'SET-NUM-OF-PAGES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const ADD_TO_FOLLOWING_IN_PROGRESS = 'ADD-TO-FOLLOWING-IN-PROGRESS';
const REMOVE_FROM_FOLLOWING_IN_PROGRESS = 'REMOVE-FROM-FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 4,
    totalCount: 0,
    numOfPages: 0,
    isFetching: false,
    followingInProgress: [],

}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: user.followed ? false : true }
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_NUM_OF_PAGES: {
            return {
                ...state,
                numOfPages: action.pages,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page,
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.count,
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case ADD_TO_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: [...state.followingInProgress, action.id],
            }
        }
        case REMOVE_FROM_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: state.followingInProgress.filter(id => {
                    if (id !== action.id) {
                        return id;
                    }
                })
            }
        }
        default: {
            return state;
        }
    }
}

export default usersPageReducer;

export const followUnfollow = (id) => ({ type: FOLLOW_UNFOLLOW, userId: id });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setNumOfPages = (pages) => ({ type: SET_NUM_OF_PAGES, pages: pages });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page: page });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count: count });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching: isFetching });
export const addFolowProg = (id) => ({ type: ADD_TO_FOLLOWING_IN_PROGRESS, id: id });
export const removeFolowProg = (id) => ({ type: REMOVE_FROM_FOLLOWING_IN_PROGRESS, id: id });

export const getFollowUnfollow = (isFollowed, id) => async (dispatch) => {

    const method = isFollowed ? api.removeFriend : api.addFriend;

    dispatch(addFolowProg(id));
    const data = await method(id);
    if (data.resultCode === 0) {
        dispatch(followUnfollow(id));
        dispatch(removeFolowProg(id));
    }
}

export const getUsersFirstTime = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await api.getUsers(currentPage, pageSize);
    setTimeout(() => {
        dispatch(setIsFetching(false));
        let numOfPages = Math.ceil(data.totalCount / pageSize);
        dispatch(setNumOfPages(numOfPages));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    }, 1700);
}
export const getUsers = (p, pageSize) => async (dispatch) => {
    const data = await api.getUsers(p, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setCurrentPage(p));
}