import React from "react";
import classes from './loginForm.module.css';
import { useForm } from "react-hook-form";
import { apiLogin } from "../../api/apiLogin";
import { ResultCodeEnum, ResultCodeWithCaptchaEnum } from "../../types/types";
import { CreateController } from "../common/fieldCreator/createControllers";
import { LoginFormNames } from "../../types/types";

type PropsType = {
    login: () => void,
    captchaURL: string | null,
    setCaptchaURL: (captcha: string | null) => void,
}

type FormType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string,
}

const LoginForm: React.FC<PropsType> = ({ login, setCaptchaURL, captchaURL }) => {
    const { control, handleSubmit, register, setError, formState: { errors } } = useForm<FormType>({ 
        mode: 'onTouched' 
    });

    const onSubmit = async (data: FormType) => {
        const response = await apiLogin.login(data);
        if (response.resultCode === ResultCodeEnum.Success) {
            login();
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : 'some error';
            setError('rememberMe', { message: message });
            if (response.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
                const captchaURL = await apiLogin.getCaptchaURL();
                setCaptchaURL(captchaURL);
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.emailInput}>
                    {CreateController<Extract<keyof LoginFormNames, string>>("email", errors.email?.message,
                    50, control, true, true, 'Enter your login...')}
                </div>
                {CreateController<Extract<keyof LoginFormNames, string>>("password", errors.password?.message,
                    50, control, true, false, 'Enter your password...', 'password')}
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
                            {CreateController<Extract<keyof LoginFormNames, string>>("captcha", 
                            errors.captcha?.message, 50, control, true, false, 'Enter captcha...')}
                        </div>
                        : ''}
                </div>
                <button className={classes.button}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;









