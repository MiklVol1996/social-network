import React from 'react';
import classes from './profileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.description}>
                ava + description
            </div>
            <textarea placeholder='Enter your post...'></textarea>
            <div>
                <button>Add post</button>
            </div>
        </div>
    )
}
export default ProfileInfo;