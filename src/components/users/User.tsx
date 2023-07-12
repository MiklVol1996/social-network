import React from 'react';
import classes from './user.module.css';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../types/types';

type PropsType = {
    user: UserType,
    defaultAva: any
}

const User: React.FC<PropsType> = React.memo(({ user, defaultAva }) => {
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
                {`${user.name} age : unknown`}
            </div>
            {user.followed
                ? <div className={classes.isFriend}>
                    you are friends
                </div>
                : <></>}
        </div>
    )
})

export default User;