import React from 'react';
import classes from './post.module.css';
import weider from '../../../../images/weider.jpg';

type Props = {
    message: string,
    likesCount: string,
}

const Post: React.FC<Props> = (props) => {
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