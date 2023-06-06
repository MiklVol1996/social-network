import React from 'react';
import Post from './post/Post';
import classes from './posts.module.css';
import { addPostAC, updatePostTextValueAC } from '../../../redux/state';

const Posts = ({ state, dispatch }) => {

    let posts = state.posts.map(post => <Post message={post.message} 
        likesCount={post.likesCount} />)

    let textarea = React.createRef();

    function onPostTextUpdate(){
        let value = textarea.current.value;
        dispatch(updatePostTextValueAC(value));
    }

    function addPost(){
        dispatch(addPostAC());
    }

    return (
        <div>
            <textarea onChange={onPostTextUpdate} value={state.postTextValue}
                placeholder='Enter your post...' ref={textarea}></textarea>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.title}>
                My Posts
            </div>
            {posts}
        </div>
    )
}
export default Posts;