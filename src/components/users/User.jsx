import React from 'react';
import classes from './user.module.css';
import { NavLink } from 'react-router-dom';

const User = ({ user, defaultAva }) => {
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
        </div>
    )
}
export default User;