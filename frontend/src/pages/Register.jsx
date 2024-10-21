import { Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loading from '../components/Loading';
import RegisterForm from '../forms/RegisterForm'
import AuthModule from '../modules/AuthModule';

import { register } from '../redux/auth/action';
//import { selectAuth } from '../redux/auth/selectors';

const RegisterPage = () => {

    //const { isLoading, isSuccess } = useSelector(selectAuth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log(values)
        dispatch(register({ registerData: values }));
        navigate('/');
    }

    const FormContainer = () => {
        return (
           // <Loading isLoading={isLoading}>
                <Form
                    layout='vertical'
                    name='normal_login'
                    className='login-form'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <RegisterForm />
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        size="large"
                    >
                        Register
                    </Button>
                </Form>
           // </Loading>
        )
    }
    return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign Up" />
}
export default RegisterPage;