import React from 'react';
import Preloader from '../../preloader/Preloader';
import classes from './profileInfo.module.css';
import defaultAva from '../../../images/defaultAva.jpg';
import Status from './Status';

const ProfileInfo = ({ profile, sendStatusToServer, status, id }) => {

    return (
        <div>
            {
                profile
                    ? <div>
                        <div className={classes.description}>
                            <Status sendStatusToServer={sendStatusToServer}
                            status={status} id={id} />
                        </div>
                        <div className={classes.avaWrap}>
                            <img src={profile.photos.large || defaultAva} />
                        </div>
                    </div>
                    : <Preloader />
            }
        </div>

    )
}
export default ProfileInfo;