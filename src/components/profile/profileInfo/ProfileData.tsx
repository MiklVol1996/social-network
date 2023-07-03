import React from 'react';
import Button from '../../common/button/Button';
import classes from './profileData.module.css';
import { ProfileType, ContactsProfileType } from '../../../types/types';

type Props = {
    profile: ProfileType, 
    isOwner: boolean, 
    setEditMode: (is: boolean) => void,
}

const ProfileData: React.FC<Props> = ({ profile, isOwner, setEditMode }) => {
    return (
        <div className={classes.right}>
            <div className={classes.about}>
                <div className={classes.aboutItem}>
                    <span><b>Full name:&nbsp;&nbsp;&nbsp;</b></span><br />{profile.fullName}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>About me:&nbsp;&nbsp;&nbsp;</b></span><br />{profile.aboutMe}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>Looking for a job:&nbsp;&nbsp;&nbsp;</b></span><br />{profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>Looking for a job description:&nbsp;&nbsp;&nbsp;</b></span><br />{profile.lookingForAJobDescription}
                </div>
                {isOwner ? <Button onClick={() => setEditMode(true)}>Edit</Button> : ''}
            </div>
            <div className={classes.contacts}>
                <div className={classes.contactsTitle}>
                    <span><b>Contacts:&nbsp;&nbsp;&nbsp;</b></span>
                </div>
                <div>
                    {Object.keys(profile.contacts).map((el, i) => {
                        return (
                            <div key={i} className={classes.contWrap}><b>{el}:</b>&nbsp;&nbsp;&nbsp;<br />
                                {profile.contacts[el as keyof ContactsProfileType]}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileData;