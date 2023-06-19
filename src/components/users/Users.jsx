import React from 'react';
import Button from '../common/button/Button';
import classes from './users.module.css';
import defaultAva from '../../images/defaultAva.jpg';
import Preloader from '../common/preloader/Preloader';
import Pagination from '../common/pagination/Pagination';
import User from './User';

const Users = ({ currentPage, users, numOfPages,
    isFetching, folowInProgAr, getFolUnfol,
    getUsers, pageSize }) => {

    function swithPage(str) {
        switch (str) {
            case '-': {
                if (currentPage !== 1) {
                    getUsers(currentPage - 1, pageSize);
                }
                break;
            }
            case '+': {
                if (currentPage !== numOfPages) {
                    getUsers(currentPage + 1, pageSize);
                }
                break;
            }
        }

    }

    const isDisabled = (arr, userID) => {
        return arr.some(id => id === userID);
    }

    return (
        <div>
            {
                isFetching
                    ? <Preloader />
                    : <div className={classes.mainWrap}>
                        <div className={classes.title}>
                            Users
                        </div>
                        <Pagination currentPage={currentPage} numOfPages={numOfPages}
                            swithPage={swithPage} pageSize={pageSize} getUsers={getUsers}/>
                        {users.map((user, i) => {
                            return (
                                <div className={classes.userInfoWrap} key={i}>
                                    <User user={user} defaultAva={defaultAva}/>
                                    <Button disabled={isDisabled(folowInProgAr, user.id)}
                                        onClick={() => {getFolUnfol(user.followed, user.id)}}>
                                        {user.followed ? 'unfollowed' : 'followed'}
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
            }
        </div >
    )
}

export default Users;