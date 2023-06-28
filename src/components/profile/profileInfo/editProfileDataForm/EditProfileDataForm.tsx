import React from 'react';
import classes from '../profileData.module.css';
import Button from '../../../common/button/Button';
import { useForm, Controller } from 'react-hook-form';
import Input from '../../../common/formControls/CustomInputForm';
import { ProfileType, ContactsProfileType } from '../../../../types/types';
import { api } from '../../../../api/api';
import { ResultCodeEnum } from '../../../../api/api';

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

const CreateController = (name: string, errorMes: string | undefined, control: any,
    required: boolean, maxLength: number, type?: string) => {
    return (
        <Controller name={name} control={control}
            render={({ field }) => <Input {...field} error={errorMes} type={type} />}
            rules={{
                required: required ? 'field is required' : false, maxLength: {
                    value: maxLength,
                    message: `max length is ${maxLength} symbols`
                }
            }} />
    )
}

const EditProfileDataForm: React.FC<PropsType> = ({ profile, updateProfileData }) => {

    const { control, handleSubmit, formState: { errors }, setError, register } = useForm<FormTypes>({
        mode: 'onChange',
        defaultValues: profile,
    });

    const onSubmit = async (data: FormTypes) => {
        const answer = await api.updatePforileData({ ...data, userId: profile.userId });
        if (answer.resultCode === ResultCodeEnum.Success) {
            updateProfileData();
        } else {
            const length = answer.messages.length;
            for (let i = 0; i < length; i++) {
                const name = answer.messages[i].split('>')[1].split('');
                name.pop();
                const finalName = name.join('').toLowerCase();
                // @ts-ignore
                setError(`contacts.${finalName}`, { message: 'invalid URL' })
            }
        }
    }

    return (
        <form className={classes.right} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.about}>
                <div className={classes.aboutItem}>
                    <span><b>Full name:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {CreateController('fullName', errors.fullName?.message, control, true, 15)}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>About me:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {CreateController('aboutMe', errors.aboutMe?.message, control, true, 70)}
                </div>
                <div className={classes.aboutItem}>
                    <span><b>Looking for a job:&nbsp;&nbsp;&nbsp;</b></span><br />
                    <input {...register('lookingForAJob')} type='checkbox' />
                </div>
                <div className={classes.aboutItem}>
                    <span><b>Looking for a job description:&nbsp;&nbsp;&nbsp;</b></span><br />
                    {CreateController('lookingForAJobDescription', errors.lookingForAJobDescription?.message, control, true, 70)}
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
                                {CreateController(`contacts.${el}`,
                                    // @ts-ignore
                                    errors.contacts?.[el]?.message, control, false, 25)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </form>
    )
}

export default EditProfileDataForm;