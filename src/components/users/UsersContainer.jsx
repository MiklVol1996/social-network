import { connect } from "react-redux";
import { followUnfollowAC, setUsersAC } from "../../redux/usersPageReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        followUnfollow: (id) => {
            dispatch(followUnfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);