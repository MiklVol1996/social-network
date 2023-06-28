import { api } from "../api/api";
import { UserType } from "../types/types";
import { Dispatch } from "react";

const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_NUM_OF_PAGES = 'SET-NUM-OF-PAGES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const ADD_TO_FOLLOWING_IN_PROGRESS = 'ADD-TO-FOLLOWING-IN-PROGRESS';
const REMOVE_FROM_FOLLOWING_IN_PROGRESS = 'REMOVE-FROM-FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSize: 4,
    totalCount: 0,
    numOfPages: 0,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of users id
}

type InitialStateType = typeof initialState;

const usersPageReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type ActionsTypes = FollowUnfollowActionType | SetUsersActionType | SetNumOfPagesActionType |
    SetCurrentPageActionType | SetTotalCountActionType | SetIsFetchingActionType | AddFolowProgActionType |
    RemoveFolowProgActionType;

type FollowUnfollowActionType = { type: typeof FOLLOW_UNFOLLOW, userId: number }
export const followUnfollow = (id: number): FollowUnfollowActionType => ({ type: FOLLOW_UNFOLLOW, userId: id });

type SetUsersActionType = { type: typeof SET_USERS, users: Array<UserType> }
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users: users });

type SetNumOfPagesActionType = { type: typeof SET_NUM_OF_PAGES, pages: number }
export const setNumOfPages = (pages: number): SetNumOfPagesActionType => ({ type: SET_NUM_OF_PAGES, pages: pages });

type SetCurrentPageActionType = { type: typeof SET_CURRENT_PAGE, page: number }
export const setCurrentPage = (page: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, page: page });

type SetTotalCountActionType = { type: typeof SET_TOTAL_COUNT, count: number }
export const setTotalCount = (count: number): SetTotalCountActionType => ({ type: SET_TOTAL_COUNT, count: count });

type SetIsFetchingActionType = { type: typeof SET_IS_FETCHING, isFetching: boolean }
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({ type: SET_IS_FETCHING, isFetching: isFetching });

type AddFolowProgActionType = { type: typeof ADD_TO_FOLLOWING_IN_PROGRESS, id: number }
export const addFolowProg = (id: number): AddFolowProgActionType => ({ type: ADD_TO_FOLLOWING_IN_PROGRESS, id: id });

type RemoveFolowProgActionType = { type: typeof REMOVE_FROM_FOLLOWING_IN_PROGRESS, id: number }
export const removeFolowProg = (id: number): RemoveFolowProgActionType => ({ type: REMOVE_FROM_FOLLOWING_IN_PROGRESS, id: id });


export const getFollowUnfollow = (isFollowed: boolean, id: number) => async (dispatch: Dispatch<ActionsTypes>) => {

    const method = isFollowed ? api.removeFriend : api.addFriend;

    dispatch(addFolowProg(id));
    const data = await method(id);
    if (data.resultCode === 0) {
        dispatch(followUnfollow(id));
        dispatch(removeFolowProg(id));
    }
}

export const getUsersFirstTime = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<ActionsTypes>) => {
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
export const getUsers = (p: number, pageSize: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    const data = await api.getUsers(p, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setCurrentPage(p));
}