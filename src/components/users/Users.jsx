import React from 'react';
import Button from '../button/Button';
import classes from './users.module.css';
import defaultAva from '../../images/defaultAva.jpg';


const Users = ({currentPage, users, onPageClick, followUnfollow}) => {

    let pages = [];
    let i = currentPage - 5 <= 0 ? 1 : currentPage - 5;
    let max = i + 10;
    for (; i <= max; i++) {
        pages.push(`${i} `);
    }

    return (
        <div className={classes.mainWrap}>
            <div className={classes.title}>
                Users
            </div>
            <div className={classes.pages}>
                {pages.map(p => {
                    return (
                        <span className={+p === currentPage ? classes.active : classes.usual}
                            onClick={() => onPageClick(+p)}>{p}</span>
                    )
                })}
            </div>
            {users.map(user => {
                return (
                    <div className={classes.userWrap}>
                        <div className={classes.photo}>
                            <img src={user.photos.small
                                ? user.photos.small
                                : defaultAva} />
                        </div>
                        <div>
                            {`${user.name} age : ${user.age}`}
                        </div>
                        <div>
                            <Button onClick={() => {followUnfollow(user.id) }}>
                                {user.followed ? 'unfollowed' : 'followed'}
                            </Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Users;