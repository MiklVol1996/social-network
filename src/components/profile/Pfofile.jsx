import React from 'react';
import classes from './profile.module.css';
import PostsContainer from './posts/PostsContainer';
import ProfileInfo from './profileInfo/PfofileInfo';

const Profile = ({profile}) => {
    
    return (
        <div className={classes.content}>
            <div className={classes['main-content-block']}>
                <ProfileInfo profile={profile}/>
                <PostsContainer/>
            </div>
        </div>
    )
}
export default Profile;