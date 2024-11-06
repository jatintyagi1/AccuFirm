import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loading from '../components/Loading';
import AuthModule from '../modules/AuthModule';
import RegisterForm from '../forms/RegisterForm';
import { Form, Button } from 'antd';


import { selectAuth } from '../redux/auth/selectors';
import { register } from '../redux/auth/actions';

const RegisterPage = () => {

    const { isLoading, isSuccess } = useSelector(selectAuth);
    const navigate = useNavigate();

    const dispatch = useDispatch();


    const onFinish = (values) => {
        dispatch(register({ loginData: values }));
    }

    useEffect(() => {
        if (isSuccess) navigate('/');
    }, [isSuccess]);

    const FormContainer = () => {
        return (
            <Loading isLoading={isLoading}>
                <Form
                    layout="vertical"
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <RegisterForm />
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            loading={isLoading}
                            size="large"
                        >
                            Register
                        </Button>
                        or <a href="/login">already have account Login</a>
                    </Form.Item>
                </Form>
            </Loading>
        )
    }
    return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign Up" />;
}

export default RegisterPage;