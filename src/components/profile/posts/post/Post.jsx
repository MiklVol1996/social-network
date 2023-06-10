import React from 'react';
import classes from './post.module.css';
import weider from '../../../../images/weider.jpg';

let Post = (props) => {
    return (
        <div className={classes.post_wrap}>
            <div className={classes.post}>
                <img src={weider} />
                {props.message}
            </div>
            <div>
                {`likes ${props.likesCount}`} 
            </div>
            
        </div>


    )
}
export default Post;