import React from 'react';
import Button from '../button/Button';
import classes from './users.module.css';
import defaultAva from '../../images/defaultAva.jpg';
import Preloader from '../preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { api } from '../../api/api';

const Users = ({ currentPage, users, onPageClick, followUnfollow,
    numOfPages, isFetching, addFolowProg, removeFolowProg, folowInProgAr }) => {

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
                    onPageClick(currentPage - 1);
                }
                break;
            }
            case '+': {
                if (currentPage !== numOfPages) {
                    onPageClick(currentPage + 1);
                }
                break;
            }
        }

    }

    function onFollowClick(isFollowed, id) {
        if (isFollowed) {
            addFolowProg(id);
            api.removeFriend(id)
                .then(data => {
                    if (data.resultCode === 0) {
                        followUnfollow(id);
                        removeFolowProg(id);
                    }
                });
        } else {
            addFolowProg(id);
            api.addFriend(id)
                .then(data => {
                    if (data.resultCode === 0) {
                        followUnfollow(id);
                        removeFolowProg(id);
                    }
                });
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
                            {pages.map(p => {
                                return (
                                    <span className={+p === currentPage ? classes.active : classes.usual}
                                        onClick={() => onPageClick(+p)}>{p}</span>
                                )
                            })}
                            <div className={classes.ahead} onClick={() => swithPage('+')}>
                                {'->'}
                            </div>
                        </div>
                        {users.map(user => {
                            return (
                                <div className={classes.userWrap}>
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
                                        onClick={() => { onFollowClick(user.followed, user.id) }}>
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