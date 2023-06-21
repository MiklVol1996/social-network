import React from 'react';
import { reduxForm } from 'redux-form';
import { createField } from '../../../common/fieldCreator/createField';
import classes from '../profileData.module.css';
import { Input } from '../../../common/formControls/FormsControls';
import Button from '../../../common/button/Button';
import { maxLength } from '../../../../utils/validators';

const elem = Input(false);
const length15 = maxLength(15);
const length70 = maxLength(70);

const EditProfileDataForm = ({ handleSubmit, profile }) => {
    
    return (
        <form className={classes.right} onSubmit={handleSubmit}>
            <div className={classes.about}>
            <div className={classes.aboutItem}>
                    <span><b>Full name:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {createField('fullName', elem, '', [length15], 'text')}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>About me:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {createField('aboutMe', elem, '', [length70], 'text')}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>Looking for a job:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {createField('lookingForAJob', elem, '', [], 'checkbox')}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>Looking for a job description:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {createField('lookingForAJobDescription', elem, '', [length70], 'text')}
                </div>
                <Button>Update</Button>
            </div>
            <div className={classes.contacts}>
                <div className={classes.contactsTitle}>
                    <span><b>Contacts:&nbsp;&nbsp;&nbsp;</b></span>
                </div>
                <div>
                    {Object.keys(profile.contacts).map((el, i) => {
                        return (
                            <>
                                <div key={i}><b>{el}:</b>&nbsp;&nbsp;&nbsp;</div>
                                {createField(`contacts.${el}`, elem, '', [], 'text')}
                            </>
                        )
                    })}
                </div>
            </div>
        </form>
    )
}
export default reduxForm({ form: 'EditProfileDataForm' })(EditProfileDataForm);