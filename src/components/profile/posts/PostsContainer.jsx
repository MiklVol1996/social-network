import { addPost } from '../../../redux/profilePageReducer';
import Posts from './Posts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
       state: state.profilePage,
    }
}

const PostsContainer = connect(mapStateToProps, {addPost})(Posts);

export default PostsContainer;