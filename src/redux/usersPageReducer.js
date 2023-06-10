const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_NUM_OF_PAGES = 'SET-NUM-OF-PAGES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 4,
    totalCount: 0,
    numOfPages: 0,

}

const usersPageReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW_UNFOLLOW: {
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: user.followed ? false : true}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return{
                ...state,
                users: [...action.users]
            }
        }
        case SET_NUM_OF_PAGES: {
            return{
                ...state,
                numOfPages: action.pages,
            }
        }
        case SET_CURRENT_PAGE: {
            return{
                ...state,
                currentPage: action.page,
            }
        }
        case SET_TOTAL_COUNT: {
            return{
                ...state,
                totalCount: action.count,
            }
        }
        default: {
            return state;
        }
    }
}

export default usersPageReducer;

export const followUnfollowAC = (id) => ({type: FOLLOW_UNFOLLOW, userId: id});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setNumOfPagesAC = (pages) => ({type: SET_NUM_OF_PAGES, pages: pages});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page: page});
export const setTotalCountAC = (count) => ({type: SET_TOTAL_COUNT, count: count});