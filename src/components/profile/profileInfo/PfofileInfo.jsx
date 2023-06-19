import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import classes from './profileInfo.module.css';
import defaultAva from '../../../images/defaultAva.jpg';
import Status from './status/Status';

const ProfileInfo = ({ profile, sendStatusToServer, status,
    id, uploadNewPhoto, autorizedID }) => {

    const onPhotoLoaded = (e) => {
        uploadNewPhoto(e.target.files);
    }

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
                        {id === autorizedID
                            && <div>
                                <input type='file' id='file' className={classes.input}
                                    onChange={onPhotoLoaded} />
                            </div>}
                    </div>
                    : <Preloader />
            }
        </div>
    )
}
export default ProfileInfo;