import React, { useMemo, useState } from 'react';
import Post from './post/Post';
import classes from './posts.module.css';
import Button from '../../common/button/Button';
import { givePosts } from '../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/profilePageReducer';


const Posts: React.FC = React.memo(() => {

    let [postText, setPostText] = useState('');
    const posts = useSelector(givePosts);
    const dispatch = useDispatch();

    let postsAr = useMemo(() => {
        return posts.map((post, i) => <Post message={post.message}
            likesCount={post.likesCount} key={i} />)
    }, [posts])

    const onPostAdded = () => {
        dispatch(actions.addPost(postText));
        setPostText('');
    }

    return (
        <div className={classes.postsWrap}>
            <textarea placeholder='Enter your post...' value={postText}
                onChange={(e) => setPostText(e.target.value)} />
            <Button onClick={onPostAdded}>Add post</Button>
            <div className={classes.title}>
                My Posts
            </div>
            {postsAr}
        </div>
    )
})

export default Posts;