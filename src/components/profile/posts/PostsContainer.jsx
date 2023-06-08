import React from 'react';
import { addPostAC, updatePostTextValueAC } from '../../../redux/profilePageReducer';
import Posts from './Posts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
       state: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updatePostTextValue: (text) => {
            dispatch(updatePostTextValueAC(text));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;