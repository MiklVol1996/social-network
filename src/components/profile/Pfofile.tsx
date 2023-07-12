import React from 'react';
import classes from './profile.module.css';
import Posts from './posts/Posts';
import ProfileInfo from './profileInfo/PfofileInfo';

type Props = {
    isOwner: boolean, 
}

const Profile: React.FC<Props> = React.memo(({isOwner}) => {
    return (
        <div className={classes.content}>
            <div className={classes['main-content-block']}>
                <div className={classes.profileInfoWrap}>
                    <ProfileInfo isOwner={isOwner} />
                </div>
                {isOwner ? <Posts /> : ''} 
            </div>
        </div>
    )
})

export default Profile;