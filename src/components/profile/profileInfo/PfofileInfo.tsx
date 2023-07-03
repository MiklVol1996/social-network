import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import classes from './profileInfo.module.css';
import defaultAva from '../../../images/defaultAva.jpg';
import Status from './status/Status';
import ProfileData from './ProfileData';
import { useState, useEffect, ChangeEvent } from 'react';
import EditProfileDataForm from './editProfileDataForm/EditProfileDataForm';
import close from '../../../images/close.jpg';
import { ProfileType } from '../../../types/types';

type Props = {
    profile: ProfileType | null,
    sendStatusToServer: (text: string) => void,
    status: string | null,
    uploadNewPhoto: (data: any) => void,
    isOwner: boolean,
    updateProfileData: () => void,
}

const ProfileInfo: React.FC<Props> = ({ profile, sendStatusToServer, status,
    uploadNewPhoto, isOwner, updateProfileData }) => {

    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (isOwner) {
            setEditMode(false);
        }
    }, [profile]);

    const onPhotoLoaded = (e: ChangeEvent<HTMLInputElement>) => {
        uploadNewPhoto(e.target.files);
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
                                    <label>
                                        <input type='file' id='file' className={classes.input}
                                            onChange={onPhotoLoaded} />
                                        <span>Change photo</span>
                                    </label>
                                </div>}
                        </div>
                        {
                            editMode
                                ? <div className={classes.formWrap}>
                                    <img src={close} onClick={() => setEditMode(false)} />
                                    <EditProfileDataForm profile={profile} updateProfileData={updateProfileData} />
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