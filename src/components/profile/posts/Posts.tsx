import React, { useMemo, useState } from 'react';
import Post from './post/Post';
import classes from './posts.module.css';
import Button from '../../common/button/Button';
import { PostType } from '../../../types/types';

type Props = {
    posts: Array<PostType>,
    addPost: (text: string) => void,
}

const Posts: React.FC<Props> = ({ posts, addPost }) => {

    let [postText, setPostText] = useState('');

    let postsAr = useMemo(() => {
        return posts.map((post, i) => <Post message={post.message}
            likesCount={post.likesCount} key={i} />)
    }, [posts])

    const onPostAdded = () => {
        addPost(postText);
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
}

export default Posts;