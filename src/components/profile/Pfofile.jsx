import React from 'react';
import classes from './profile.module.css';
import Posts from './posts/Posts'

let Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes['main-content-block']}>
                <div>
                    ava + description
                </div>
                <textarea placeholder='Enter your post...'></textarea>
                <button>Add post</button>
                <Posts />
            </div>
        </div>
    )
}
export default Profile;