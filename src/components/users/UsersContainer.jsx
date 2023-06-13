import { connect } from "react-redux";
import {
    followUnfollow, setUsers,
    setNumOfPages, setCurrentPage,
    setTotalCount, setIsFetching,
    addFolowProg, removeFolowProg,
} from "../../redux/usersPageReducer";
import React from 'react';
import Users from './Users';
import { api } from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        api.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                setTimeout(() => {
                    this.props.setIsFetching(false);
                    let numOfPages = Math.ceil(data.totalCount / this.props.pageSize);
                    this.props.setNumOfPages(numOfPages);
                    this.props.setUsers(data.items);
                    this.props.setTotalCount(data.totalCount);
                }, 1700);
            });
    }

    onPageClick = (p) => {
        api.getUsers(p, this.props.pageSize)
            .then(data => {
                    this.props.setUsers(data.items);
                    this.props.setCurrentPage(p);
            });
    }

    render() {
        return (
            <Users currentPage={this.props.currentPage} followUnfollow={this.props.followUnfollow}
                users={this.props.users} onPageClick={this.onPageClick}
                numOfPages={this.props.numOfPages} isFetching={this.props.isFetching}
                removeFolowProg={this.props.removeFolowProg} 
                addFolowProg={this.props.addFolowProg}
                folowInProgAr={this.props.folowInProgAr}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        currentPage: state.userPage.currentPage,
        pageSize: state.userPage.pageSize,
        numOfPages: state.userPage.numOfPages,
        isFetching: state.userPage.isFetching,
        folowInProgAr: state.userPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    followUnfollow, setUsers,
    setNumOfPages, setCurrentPage, setTotalCount, setIsFetching,
    addFolowProg, removeFolowProg
})(UsersContainer);