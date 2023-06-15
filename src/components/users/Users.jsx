import React from 'react';
import Button from '../button/Button';
import classes from './users.module.css';
import defaultAva from '../../images/defaultAva.jpg';
import Preloader from '../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';

const Users = ({ currentPage, users, numOfPages, 
    isFetching, folowInProgAr, getFollowUnfollow,
    getUsers, pageSize }) => {

    let pages = [];
    let i = currentPage - 5 <= 0 ? 1 : currentPage - 5;
    let max = i + 10;
    for (; i <= max; i++) {
        if (i > numOfPages) {
            break;
        }
        pages.push(`${i} `);
    }

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

    return (
        <div>
            {
                isFetching
                    ? <Preloader />
                    : <div className={classes.mainWrap}>
                        <div className={classes.title}>
                            Users
                        </div>
                        <div className={classes.pages}>
                            <div className={classes.back} onClick={() => swithPage('-')}>
                                {'<-'}
                            </div>
                            {pages.map((p, i) => {
                                return (
                                    <span key={i} className={+p === currentPage ? classes.active : classes.usual}
                                        onClick={() => getUsers(+p, pageSize)}>{p}</span>
                                )
                            })}
                            <div className={classes.ahead} onClick={() => swithPage('+')}>
                                {'->'}
                            </div>
                        </div>
                        {users.map((user, i) => {
                            return (
                                <div className={classes.userWrap} key={i}>
                                    <div className={classes.photo}>
                                        <NavLink to={'/profile/' + user.id}>
                                            <img src={user.photos.small
                                                ? user.photos.small
                                                : defaultAva} />
                                        </NavLink>
                                    </div>
                                    <div>
                                        {`${user.name} age : ${user.age}`}
                                    </div>
                                    {user.followed
                                        ? <div className={classes.isFriend}>
                                            you are friends
                                        </div>
                                        : <></>}

                                    <div>
                                        <Button disabled={folowInProgAr.some(id => id === user.id)} 
                                        onClick={() => { getFollowUnfollow(user.followed, user.id) }}>
                                            {user.followed ? 'unfollowed' : 'followed'}
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            }
        </div >


    )
}
export default Users;