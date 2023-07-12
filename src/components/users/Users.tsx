import React from 'react';
import Button from '../common/button/Button';
import classes from './users.module.css';
import defaultAva from '../../images/defaultAva.jpg';
import Preloader from '../common/preloader/Preloader';
import Pagination from '../common/pagination/Pagination';
import User from './User';
import { UserType, UsersFilter } from '../../types/types';
import SearchUsersForm from './SearchUserForm';
import { useDispatch, useSelector } from 'react-redux';
import {
    giveFolowInProgAr, giveIsFetching, giveUsers,
    giveNumOfPages,
    giveMyName
} from '../../redux/selectors';
import { getUsers, getFollowUnfollow } from '../../redux/usersPageReducer';
import { Action } from 'redux';
import { useNavigate } from 'react-router-dom';

type PropsType = {
    currentPage: number,
    pageSize: number,
    filter: UsersFilter,
}

const Users: React.FC<PropsType> = React.memo(({ currentPage, filter, pageSize }) => {

    const users = useSelector(giveUsers);
    const numOfPages = useSelector(giveNumOfPages);
    const isFetching = useSelector(giveIsFetching);
    const folowInProgAr = useSelector(giveFolowInProgAr);
    const myName = useSelector(giveMyName);
    const dispatch = useDispatch();
    const location = useNavigate();

    const swithPage = (str: string) => {
        switch (str) {
            case '-': {
                if (currentPage !== 1) {
                    dispatch(getUsers(currentPage - 1, pageSize, filter) as unknown as Action);
                }
                break;
            }
            case '+': {

                if (currentPage !== numOfPages) {
                    dispatch(getUsers(currentPage + 1, pageSize, filter) as unknown as Action);
                }
                break;
            }
        }
    }

    const isDisabled = (arr: Array<number>, userID: number) => {
        return arr.some(id => id === userID);
    }

    const onFolButtonClick = (user: UserType) => {
        dispatch(getFollowUnfollow(user.followed, user.id) as unknown as Action)
    }

    const onMesButClick = (id: number) => {
        debugger
        let path = '/private/' + id;
        location(path)
    }

    return (
        <div>
            {
                isFetching
                    ? <Preloader />
                    : <div className={classes.mainWrap}>
                        <div className={classes.userTitleWRap}>
                            <div className={classes.title}>
                                Users
                            </div>
                            <SearchUsersForm getUsers={getUsers} filter={filter} pageSize={pageSize} />
                        </div>
                        <Pagination currentPage={currentPage} numOfPages={numOfPages} pageSize={pageSize}
                            swithPage={swithPage} getUsers={getUsers} filter={filter} />
                        {users.map((user, i) => {
                            return (
                                <div className={classes.userInfoWrap} key={i}>
                                    <User user={user} defaultAva={defaultAva} />
                                    <div className={user.name === myName ? classes['hidden'] : classes['usual']}>
                                        <Button disabled={isDisabled(folowInProgAr, user.id)}
                                            onClick={() => { onFolButtonClick(user) }}>
                                            {user.followed ? 'unfollowed' : 'followed'}
                                        </Button>
                                        <Button onClick={() => onMesButClick(user.id)}>Send mes</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            }
        </div >
    )
})

export default Users;