import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '../common/button/Button';
import { createField } from '../common/fieldCreator/createField';


const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        {createField('messageText', 'textarea', 'Enter you message', 
        [], '', '')}
        <Button>Send</Button>
      </form >
  )
}

export default reduxForm({form: 'dialogsPageNewMessage'})(AddMessageForm);
