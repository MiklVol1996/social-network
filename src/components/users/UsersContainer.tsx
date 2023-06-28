import { connect } from "react-redux";
import React from 'react';
import Users from './Users';
import { getFollowUnfollow, getUsersFirstTime, getUsers } from "../../redux/usersPageReducer";
import {
    giveCurrentPage, giveFolowInProgAr, giveIsFetching,
    giveNumOfPages, givePageSize, giveUsers
} from "../../redux/selectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/store";

type MapStateToPropsType = {
    users: Array<UserType>,
    currentPage: number,
    pageSize: number,
    numOfPages: number,
    isFetching: boolean,
    folowInProgAr: Array<number>,
}

type MapDispatchToPropsType = {
    getFollowUnfollow: (isFollowed: boolean, id: number) => void, 
    getUsersFirstTime: (currentPage: number, pageSize: number) => void, 
    getUsers: (currentPage: number, pageSize: number) => void,
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;
   

class UsersContainer extends React.Component<PropsType> {

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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: giveUsers(state),
        currentPage: giveCurrentPage(state),
        pageSize: givePageSize(state),
        numOfPages: giveNumOfPages(state),
        isFetching: giveIsFetching(state),
        folowInProgAr: giveFolowInProgAr(state),
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    getFollowUnfollow, getUsersFirstTime, getUsers
})(UsersContainer);