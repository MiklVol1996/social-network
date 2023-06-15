import React, { useMemo } from 'react';
import Post from './post/Post';
import classes from './posts.module.css';
import NewPostForm from './NewPostForm';

const Posts = ({ state, addPost }) => {

    let posts = useMemo(() => {
        return state.posts.map((post, i) => <Post message={post.message}
            likesCount={post.likesCount} key={i}/>)
    }, [state.posts])

    function onAddPost(data) {
        addPost(data.postText);
    }

    return (
        <div>
            <NewPostForm onSubmit={onAddPost}/>
            <div className={classes.title}>
                My Posts
            </div>
            {posts}
        </div>
    )
}
export default Posts;