import React from 'react';
import classes from './profile.module.css';
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/PfofileInfo';

const Profile = ({state}) => {
    return (
        <div className={classes.content}>
            <div className={classes['main-content-block']}>
                <ProfileInfo/>
                <Posts state={state.posts}/>
            </div>
        </div>
    )
}
export default Profile;