const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [],
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
        default: {
            return state;
        }
    }
}

export default usersPageReducer;

export const followUnfollowAC = (id) => ({type: FOLLOW_UNFOLLOW, userId: id});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});