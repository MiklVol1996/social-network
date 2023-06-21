import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '../../common/button/Button';
import { createField } from '../../common/fieldCreator/createField';

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('postText', 'textarea', 'Enter your post...', [], '', '')}
            <Button>Add post</Button>
        </form>
    )
}
export default reduxForm({ form: 'profilePageNewPost' })(NewPostForm);