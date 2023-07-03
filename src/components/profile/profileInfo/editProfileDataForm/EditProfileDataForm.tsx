import React from 'react';
import classes from '../profileData.module.css';
import Button from '../../../common/button/Button';
import { useForm } from 'react-hook-form';
import { ProfileType, ContactsProfileType, EditProfileFormNamesType, 
    ResultCodeEnum } from '../../../../types/types';
import { apiProfile } from '../../../../api/apiProfile';
import { CreateController } from '../../../common/fieldCreator/createControllers';
import { ErrorMessageHandler } from '../../../utils/errorMessageHandler';

type PropsType = {
    profile: ProfileType,
    updateProfileData: () => void
}

type FormTypes = {
    aboutMe: string
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsProfileType
}

const EditProfileDataForm: React.FC<PropsType> = ({ profile, updateProfileData }) => {

    const { control, handleSubmit, formState: { errors }, setError, register } = useForm<FormTypes>({
        mode: 'onChange',
        defaultValues: profile,
    });

    const onSubmit = async (data: FormTypes) => {
        const answer = await apiProfile.updatePforileData({ ...data, userId: profile.userId });
        if (answer.resultCode === ResultCodeEnum.Success) {
            updateProfileData();
        } else {
            ErrorMessageHandler(answer.messages, setError);
        }
    }

    return (
        <form className={classes.right} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.about}>
                <div className={classes.aboutItem}>
                    <span><b>Full name:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {CreateController<Extract<keyof EditProfileFormNamesType, string>>('fullName',
                    errors.fullName?.message, 15, control, true, false)}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>About me:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {CreateController<Extract<keyof EditProfileFormNamesType, string>>('aboutMe',
                    errors.aboutMe?.message, 70, control, true, false)}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>Looking for a job:&nbsp;&nbsp;&nbsp;</b></span><br />
                    <input {...register('lookingForAJob')} type='checkbox' />
                </div>
                <div className={classes.aboutItem}>
                    <span><b>Looking for a job description:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {CreateController<Extract<keyof EditProfileFormNamesType, string>>('lookingForAJobDescription',
                    errors.lookingForAJobDescription?.message, 70, control, true, false)}
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
                            <div key={i}><b>{el}:</b>&nbsp;&nbsp;&nbsp;
                            {CreateController<Extract<keyof EditProfileFormNamesType, string>>(
                                `contacts.${el}` as keyof EditProfileFormNamesType,
                                errors.contacts?.[el as keyof ContactsProfileType]?.message, 25, control, false, false)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </form>
    )
}

export default EditProfileDataForm;