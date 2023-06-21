import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import classes from './profileInfo.module.css';
import defaultAva from '../../../images/defaultAva.jpg';
import Status from './status/Status';
import ProfileData from './ProfileData';
import { useState } from 'react';
import EditProfileDataForm from './editProfileDataForm/EditProfileDataForm';
import { useEffect } from 'react';
import close from '../../../images/close.jpg';


const ProfileInfo = ({ profile, sendStatusToServer, status,
    uploadNewPhoto, isOwner, updateProfileData }) => {

    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if(isOwner){
            setEditMode(false);
        }
    }, [profile]);

    const onPhotoLoaded = (e) => {
        uploadNewPhoto(e.target.files);
    }

    const onEditFinish = (data) => {
        updateProfileData(data);
    }

    return (
        <div>
            {
                profile
                    ? <div className={classes.profWrap}>
                        <div className={classes.left}>
                            <div className={classes.description}>
                                <Status sendStatusToServer={sendStatusToServer}
                                    status={status} isOwner={isOwner} />
                            </div>
                            <div className={classes.avaWrap}>
                                <img src={profile.photos.large || defaultAva} />
                            </div>
                            {isOwner
                                && <div className={classes.inputWrap}>
                                    <input type='file' id='file' className={classes.input}
                                        onChange={onPhotoLoaded} />
                                    <label for='file'><span>Change photo</span></label>
                                </div>}
                        </div>
                        {
                            editMode
                                ? <div className={classes.formWrap}>
                                    <img src={close} onClick={() => setEditMode(false)}/>
                                    <EditProfileDataForm profile={profile} 
                                onSubmit={onEditFinish} initialValues={profile}/>
                                </div>
                                : <ProfileData profile={profile} isOwner={isOwner}
                                    setEditMode={setEditMode} />
                        }

                    </div>
                    : <Preloader />
            }
        </div>
    )
}
export default ProfileInfo;