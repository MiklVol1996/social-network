import React from 'react';
import classes from './post.module.css';

let Post = (props) => {
    return (
        <div className={classes.post_wrap}>
            <div className={classes.post}>
                <img src='https://steamuserimages-a.akamaihd.net/ugc/905652563634500526/102F2A9C486A60A1AC61B78B95FC3B2D23E98408/?imw=512&amp;imh=310&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true' />
                {props.message}
            </div>
            <div>
                {`likes ${props.likesCount}`} 
            </div>
            
        </div>


    )
}
export default Post;