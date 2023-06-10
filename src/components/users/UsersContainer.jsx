import { connect } from "react-redux";
import { followUnfollowAC, setUsersAC, 
    setNumOfPagesAC, setCurrentPageAC, setTotalCountAC } from "../../redux/usersPageReducer";
import React from 'react';
import axios from 'axios';
import Users from './Users';


class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                let numOfPages = Math.ceil(response.data.totalCount / this.props.pageSize);
                this.props.setNumOfPages(numOfPages);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
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
                users={this.props.users} onPageClick={this.onPageClick} />
        )

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        currentPage: state.userPage.currentPage,
        pageSize: state.userPage.pageSize,
        numOfPages: state.userPage.numOfPages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        followUnfollow: (id) => {
            dispatch(followUnfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setNumOfPages: (pages) => {
            dispatch(setNumOfPagesAC(pages));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);