import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '../common/button/Button';


const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='messageText' component='textarea'
            placeholder='Enter you message'/>
        </div>
        <Button>Send</Button>
      </form >
  )
}

export default reduxForm({form: 'dialogsPageNewMessage'})(AddMessageForm);
