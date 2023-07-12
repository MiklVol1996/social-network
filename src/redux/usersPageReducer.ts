import { apiUsers } from "../api/apiUsers";
import { UserType, ResultCodeEnum, UsersFilter } from "../types/types";
import { GetActionTypes, ThunkType } from "./store";

let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSize: 8,
    numOfPages: 0,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of users id,
    filter: {
        filter: '',
        selectValue: null as boolean | null,
    },
}

const usersPageReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW': {
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
        case 'SET-USERS': {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case 'SET-NUM-OF-PAGES': {
            return {
                ...state,
                numOfPages: action.pages,
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.page,
            }
        }
        case 'SET-IS-FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case 'ADD-TO-FOLLOWING-IN-PROGRESS': {
            return {
                ...state,
                followingInProgress: [...state.followingInProgress, action.id],
            }
        }
        case 'REMOVE-FROM-FOLLOWING-IN-PROGRESS': {
            return {
                ...state,
                followingInProgress: state.followingInProgress.filter(id => {
                    if (id !== action.id) {
                        return id;
                    }
                })
            }
        }
        case 'SET-FILTER': {
            return {
                ...state,
               filter: {...action.filter},
            }
        }
        default: {
            return state;
        }
    }
}

export const actions = {
    followUnfollow: (id: number) => ({ type: 'FOLLOW-UNFOLLOW', userId: id } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'SET-USERS', users: users } as const),
    setNumOfPages: (pages: number) => ({ type: 'SET-NUM-OF-PAGES', pages: pages } as const),
    setCurrentPage: (page: number) => ({ type: 'SET-CURRENT-PAGE', page: page } as const),
    setTotalCount: (count: number) => ({ type: 'SET-TOTAL-COUNT', count: count } as const),
    setIsFetching: (isFetching: boolean) => ({ type: 'SET-IS-FETCHING', isFetching: isFetching } as const),
    addFolowProg: (id: number) => ({ type: 'ADD-TO-FOLLOWING-IN-PROGRESS', id: id } as const),
    removeFolowProg: (id: number) => ({ type: 'REMOVE-FROM-FOLLOWING-IN-PROGRESS', id: id } as const),
    setFilter: (filter: string, selectValue: boolean | null) => ({type: 'SET-FILTER', filter: {filter, selectValue}} as const),
}


export const getFollowUnfollow = (isFollowed: boolean, id: number): ThunkType<ActionsType> =>
    async (dispatch) => {
        const method = isFollowed ? apiUsers.removeFriend : apiUsers.addFriend;
        dispatch(actions.addFolowProg(id));
        const data = await method(id);
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.followUnfollow(id));
            dispatch(actions.removeFolowProg(id));
        }
    }

export const getUsersFirstTime = (currentPage: number, pageSize: number, filter: UsersFilter): ThunkType<ActionsType> =>
    async (dispatch) => {
        dispatch(actions.setIsFetching(true));
        const data = await apiUsers.getUsers(currentPage, pageSize, filter);
        setTimeout(() => {
            dispatch(actions.setIsFetching(false));
            let numOfPages = Math.ceil(data.totalCount / pageSize);
            dispatch(actions.setNumOfPages(numOfPages));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setFilter(filter.filter, filter.selectValue));
            dispatch(actions.setCurrentPage(currentPage));
        }, 1700);
    }

export const getUsers = (p: number, pageSize: number, filter: UsersFilter): ThunkType<ActionsType> => 
async (dispatch) => {
    const data = await apiUsers.getUsers(p, pageSize, filter);
    let numOfPages = Math.ceil(data.totalCount / pageSize);
    dispatch(actions.setNumOfPages(numOfPages));
    dispatch(actions.setFilter(filter.filter, filter.selectValue));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setCurrentPage(p));
}

export default usersPageReducer;

type InitialStateType = typeof initialState;
type ActionsType = GetActionTypes<typeof actions>;