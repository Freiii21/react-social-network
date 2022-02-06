import React from 'react';
import {InjectedFormProps, reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}



const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       component={Input}
                       name={'email'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       type={"password"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
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

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
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

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login)