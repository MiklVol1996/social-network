import { connect } from "react-redux";
import React from 'react';
import Users from './Users';
import { getFollowUnfollow } from "../../redux/usersPageReducer";
import { getUsersFirstTime } from "../../redux/usersPageReducer";
import { getUsers } from "../../redux/usersPageReducer";
import {
    giveCurrentPage, giveFolowInProgAr, giveIsFetching,
    giveNumOfPages, givePageSize, giveUsers
} from "../../redux/selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersFirstTime(this.props.currentPage, this.props.pageSize);
    }

    render() {
        const data = this.props;
        return (
            <Users currentPage={data.currentPage} users={data.users}
                getUsers={data.getUsers} numOfPages={data.numOfPages}
                isFetching={data.isFetching} folowInProgAr={data.folowInProgAr}
                getFolUnfol={data.getFollowUnfollow} pageSize={data.pageSize} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: giveUsers(state),
        currentPage: giveCurrentPage(state),
        pageSize: givePageSize(state),
        numOfPages: giveNumOfPages(state),
        isFetching: giveIsFetching(state),
        folowInProgAr: giveFolowInProgAr(state),
    }
}

export default connect(mapStateToProps, {
    getFollowUnfollow, getUsersFirstTime, getUsers
})(UsersContainer);