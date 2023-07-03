import { actions } from '../../../redux/profilePageReducer';
import Posts from './Posts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { PostType } from '../../../types/types';

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
       posts: state.profilePage.posts,
    }
}

const addPost = actions.addPost;

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {addPost})(Posts);

type MapStateType = {
    posts: Array<PostType>,
}

type MapDispatchType = {
    addPost: (text: string) => void,
}
