import React, {ChangeEvent, useState} from 'react';
import {InjectedFormProps, reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import s from './Login.module.css'
import { Navigate } from 'react-router-dom';


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            {props.error && <div className={s.formSummaryError}>
                <span>
                    {props.error}
                </span>
            </div>
            }
            <div>
                <Field placeholder={'Email'}
                       component={Input}
                       name={'email'}
                       validate={[required]}
                       className={s.input}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       type={'password'}
                       validate={[required]}
                       className={s.input}
                />
            </div>
            <div className={s.checkboxField}>
                <Field type={'checkbox'}
                       component={Input}
                       name={'rememberMe'}
                       className={s.checkbox}
                />
                <span>remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe,captcha)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [captcha, setCaptcha] = useState<string>("")
    const onCaptchaChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCaptcha(e.currentTarget.value);
    }

    return (
        <div className={s.common}>
            <div>
                <h1>Authentication</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
                {props.captchaUrl ? <div className={s.captcha}>
                        <img src={props.captchaUrl} alt=""/><br/>
                        <input value={captcha} onChange={onCaptchaChange}/>
                    </div>
                    : <div className={s.fieldForCaptcha}/>
                }
            </div>
            <div className={s.bottom}>
                You can use common test account credentials:
                <div><span className={s.mail}>Login</span>: free@samuraijs.com</div>
                <div><span className={s.mail}>Password</span>: free</div>
            </div>
        </div>
    )
}

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void;
}
type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login)