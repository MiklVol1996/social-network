import React from 'react';
import classes from './profile.module.css';
import PostsContainer from './posts/PostsContainer';
import ProfileInfo from './profileInfo/PfofileInfo';
import { ProfileType } from '../../types/types';

type Props = {
    profile: ProfileType | null, 
    sendStatusToServer: (text: string) => void, 
    status: string | null, 
    uploadNewPhoto: (data: any) => void, 
    isOwner: boolean, 
    updateProfileData: () => void,
}

const Profile: React.FC<Props> = ({ profile, sendStatusToServer, status, 
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