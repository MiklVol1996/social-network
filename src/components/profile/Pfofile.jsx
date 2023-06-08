import React from 'react';
import classes from './profile.module.css';
import PostsContainer from './posts/PostsContainer';
import ProfileInfo from './profileInfo/PfofileInfo';

const Profile = ({store}) => {
    return (
        <div className={classes.content}>
            <div className={classes['main-content-block']}>
                <ProfileInfo />
                <PostsContainer store={store}/>
            </div>
        </div>
    )
}
export default Profile;