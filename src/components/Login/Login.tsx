import React from 'react';
import {InjectedFormProps, reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import sExt from './../common/FormsControls/FormsControls.module.css'
import s from './Login.module.css'


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            {props.error && <div className={sExt.formSummaryError}>
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.common}>
            <h1>Authentication</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void;
}
type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login)