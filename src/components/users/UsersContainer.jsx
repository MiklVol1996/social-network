import { connect } from "react-redux";
import {
    followUnfollow, setUsers,
    setNumOfPages, setCurrentPage,
    setTotalCount, setIsFetching
} from "../../redux/usersPageReducer";
import React from 'react';
import axios from 'axios';
import Users from './Users';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                setTimeout(() => {
                    this.props.setIsFetching(false);
                    let numOfPages = Math.ceil(response.data.totalCount / this.props.pageSize);
                    this.props.setNumOfPages(numOfPages);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                }, 1700);
            });
    }

    onPageClick = (p) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setCurrentPage(p);
            });
    }

    render() {
        return (
            <Users currentPage={this.props.currentPage} followUnfollow={this.props.followUnfollow}
                users={this.props.users} onPageClick={this.onPageClick}
                numOfPages={this.props.numOfPages} isFetching={this.props.isFetching} />
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
    }
}

export default connect(mapStateToProps, {
    followUnfollow, setUsers,
    setNumOfPages, setCurrentPage, setTotalCount, setIsFetching
})(UsersContainer);