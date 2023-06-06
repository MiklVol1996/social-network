import React from 'react';
import classes from './profile.module.css';
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/PfofileInfo';

const Profile = ({state, dispatch}) => {
    return (
        <div className={classes.content}>
            <div className={classes['main-content-block']}>
                <ProfileInfo />
                <Posts state={state} dispatch={dispatch}/>
            </div>
        </div>
    )
}
export default Profile;