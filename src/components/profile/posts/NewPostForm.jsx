import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '../../button/Button';

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='postText' placeholder='Enter your post...' />
            <Button>Add post</Button>
        </form>
    )
}
export default reduxForm({ form: 'profilePageNewPost' })(NewPostForm);