import React from 'react';
import Post from './post/Post';
import classes from './posts.module.css';

const Posts = ({state}) => {

    let posts = state.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div>
            <div className={classes.title}>
                My Posts
            </div>
           {posts}
        </div>
    )
}
export default Posts;