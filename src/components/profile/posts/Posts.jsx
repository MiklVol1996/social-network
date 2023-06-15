import React, { useMemo } from 'react';
import Button from '../../button/Button';
import Post from './post/Post';
import classes from './posts.module.css';

const Posts = ({ state, addPost, updatePostTextValue }) => {

    let posts = useMemo(() => {
        return state.posts.map(post => <Post message={post.message}
            likesCount={post.likesCount} />)
    }, [state.posts])


    function onPostTextUpdate(e) {
        let value = e.target.value;
        updatePostTextValue(value);
    }

    function onAddPost() {
        addPost();
    }

    return (
        <div>
            <textarea onChange={onPostTextUpdate} value={state.postTextValue}
                placeholder='Enter your post...'></textarea>
            <Button onClick={onAddPost}>Add post</Button>
            <div className={classes.title}>
                My Posts
            </div>
            {posts}
        </div>
    )
}
export default Posts;