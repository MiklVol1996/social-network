import React, { useMemo } from 'react';
import Post from './post/Post';
import classes from './posts.module.css';
import NewPostForm from './NewPostForm';

const Posts = ({ posts, addPost }) => {
   
    let postsAr = useMemo(() => {
        return posts.map((post, i) => <Post message={post.message}
            likesCount={post.likesCount} key={i}/>)
    }, [posts])

    function onAddPost(data) {
        addPost(data.postText);
    }

    return (
        <div className={classes.postsWrap}>
            <NewPostForm onSubmit={onAddPost}/>
            <div className={classes.title}>
                My Posts
            </div>
            {postsAr}
        </div>
    )
}
export default Posts;