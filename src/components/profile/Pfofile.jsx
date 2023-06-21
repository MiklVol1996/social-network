import React from 'react';
import classes from './profile.module.css';
import PostsContainer from './posts/PostsContainer';
import ProfileInfo from './profileInfo/PfofileInfo';

const Profile = ({ profile, sendStatusToServer, status, 
     uploadNewPhoto, isOwner, updateProfileData }) => {
        
    return (
        <div className={classes.content}>
            <div className={classes['main-content-block']}>
                <div className={classes.profileInfoWrap}>
                    <ProfileInfo profile={profile} sendStatusToServer={sendStatusToServer}
                    status={status} uploadNewPhoto={uploadNewPhoto} isOwner={isOwner}
                    updateProfileData={updateProfileData} />
                </div>
                <PostsContainer />
            </div>
        </div>
    )
}
export default Profile;