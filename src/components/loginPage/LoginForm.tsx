import React from "react";
import classes from './loginForm.module.css';
import { useForm, Controller } from "react-hook-form";
import Input from "../common/formControls/CustomInputForm";
import { api } from "../../api/api";
import { ResultCodeEnum, ResultCodeWithCaptchaEnum } from "../../api/api";

type PropsType = {
    login: () => void,
    captchaURL: string | null,
    setCaptchaURL: (url: string | null) => void,
}

type FormType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string,
}

const CreateController = (name: string, placeholder: string, errorMes: string | undefined, 
    control: any, autoFocus: boolean, type?: string) => {
    return (
        <Controller name={name} control={control}
            render={({ field }) => <Input {...field} autoFocus={autoFocus}
                placeholder={placeholder} error={errorMes} type={type}/>}
            rules={{ required: 'field is required' }} />
    )
}

const LoginForm: React.FC<PropsType> = ({ login, setCaptchaURL, captchaURL }) => {

    const { control, handleSubmit, register, setError, formState: { errors } } = useForm<FormType>({ mode: 'onTouched' });

    const onSubmit = async (data: FormType) => {
        const response = await api.login(data);
        if (response.resultCode === ResultCodeEnum.Success) {
            login();
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : 'some error';
            setError('rememberMe', { message: message });
            if (response.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
                const captchaURL = await api.getCaptchaURL();
                setCaptchaURL(captchaURL);
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.emailInput}>
                    {CreateController('email', 'Enter your login...', errors.email?.message, control, true)}
                </div>
                {CreateController('password', 'Enter your password...', errors.password?.message, control, false, 'password')}
                {errors.rememberMe?.message && <div className={classes.error}>{errors.rememberMe?.message}</div>}
                <div className={classes.checkBox}>
                    Remember me&nbsp;
                    <input {...register('rememberMe')} type='checkbox' />
                </div>
                <div className={classes.captcha}>
                    {captchaURL
                        ?
                        <div>
                            <img src={captchaURL} />
                            {CreateController('captcha', 'Enter captcha...', errors.captcha?.message, control, false)}
                        </div>
                        : ''}
                </div>
                <button className={classes.button}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;









