import React from 'react';
import Button from '../button/Button';
import classes from './users.module.css';

let Users = ({ users, followUnfollow, setUsers }) => {

    if (!users.length) {
        setUsers([
            { id: 1, name: 'misha', age: 18, followed: true },
            { id: 2, name: 'nika', age: 23, followed: false },
            { id: 3, name: 'pasha', age: 19, followed: true },
        ]);
    }

    return (
        <div className={classes.mainWrap}>
            <div className={classes.title}>
                Users
            </div>
            {users.map(user => {
                return (
                    <div className={classes.userWrap}>
                        <div className={classes.photo}>
                            <img src='https://wallpapercave.com/wp/wp7575420.jpg' />
                        </div>
                        <div>
                            {`${user.name} age : ${user.age}`}
                        </div>
                        <div>
                            <Button onClick={() => {followUnfollow(user.id)}}>
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