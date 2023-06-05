import React from 'react';
import Post from './post/Post';
import classes from './posts.module.css';

let Posts = () => {
    return (
        <div>
            <div className={classes.title}>
                My Posts
            </div>
            <Post message='Come to the dark side...' likesCount='5'/>
        </div>
    )
}
export default Posts;