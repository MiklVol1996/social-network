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
import { useDispatch, useSelector } from 'react-redux';
import { giveProfile } from '../../../redux/selectors';
import { uploadNewPhoto } from '../../../redux/profilePageReducer';
import { Action } from 'redux';

type Props = {
    isOwner: boolean,
}

const ProfileInfo: React.FC<Props> = React.memo(({ isOwner }) => {

    let [editMode, setEditMode] = useState(false);
    const profile = useSelector(giveProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOwner) {
            setEditMode(false);
        }
    }, [profile]);

    const onPhotoLoaded = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(uploadNewPhoto(e.target.files) as unknown as Action);
    }

    return (
        <div>
            {
                profile
                    ? <div className={classes.profWrap}>
                        <div className={classes.left}>
                            <div className={classes.description}>
                                <Status isOwner={isOwner} />
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
                                    <EditProfileDataForm profile={profile} />
                                </div>
                                : <ProfileData profile={profile} isOwner={isOwner}
                                    setEditMode={setEditMode} />
                        }
                    </div>
                    : <Preloader />
            }
        </div>
    )
})

export default ProfileInfo;