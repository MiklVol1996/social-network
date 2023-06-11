import React from 'react';
import Preloader from '../../preloader/Preloader';
import classes from './profileInfo.module.css';
import defaultAva from '../../../images/defaultAva.jpg';

const ProfileInfo = ({ profile }) => {

    return (
        <div>
            {
                profile
                    ? <div>
                        <div className={classes.avaWrap}>
                            <img src={profile.photos.large || defaultAva}/>
                        </div>
                        <div className={classes.description}>
                            ava + description
                        </div>
                    </div>
                    : <Preloader />
            }
        </div>

    )
}
export default ProfileInfo;