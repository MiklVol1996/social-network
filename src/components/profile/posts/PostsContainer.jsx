import { addPost, updatePostTextValue } from '../../../redux/profilePageReducer';
import Posts from './Posts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
       state: state.profilePage,
    }
}

const PostsContainer = connect(mapStateToProps, {addPost, updatePostTextValue})(Posts);

export default PostsContainer;