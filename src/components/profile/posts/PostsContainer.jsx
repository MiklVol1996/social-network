import { addPost } from '../../../redux/profilePageReducer';
import Posts from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
       posts: state.profilePage.posts,
    }
}

export default connect(mapStateToProps, {addPost})(Posts);