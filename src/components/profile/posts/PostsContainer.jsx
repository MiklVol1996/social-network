import React from 'react';
import { addPostAC, updatePostTextValueAC } from '../../../redux/profilePageReducer';
import Posts from './Posts';

const PostsContainer = ({ store }) => {

    let state = store.getState().profilePage;

    function addPost(){
        store.dispatch(addPostAC());
    }

    function updatePostTextValue(text){
        store.dispatch(updatePostTextValueAC(text));
    }
    
    return (
       <Posts state={state} addPost={addPost} updatePostTextValue={updatePostTextValue}/>
    )
}
export default PostsContainer;