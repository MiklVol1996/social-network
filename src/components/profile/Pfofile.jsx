import React from 'react';
import classes from './profile.module.css';

let Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes['main-content-block']}>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                        <div>
                            post 3
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default Profile;