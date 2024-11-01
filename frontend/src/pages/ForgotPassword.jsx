import { useNavigate } from 'react-router-dom';

import { Form, Result, Button } from 'antd';

import useOnFetch from '../hooks/useOnFetch';
import { request } from '../request';

import ForgetPasswordForm from '../forms/ForgotPasswordForm';
import Loading from '../components/Loading';
import AuthModule from '../modules/AuthModule';

export default function ForgorPassword() {
    const navigate = useNavigate();

    const { onFetch, isSuccess, isLoading } = useOnFetch();

    async function postData(data) {
        return await request.post({ entity: 'forgetpassword', jsonData: data });
    }

    const onFinish = (values) => {
        const callback = postData(values);
        onFetch(callback);
    }

    const FormContainer = () => {
        return (
            <Loading isLoading={isLoading}>
                <Form
                    name='signup'
                    className='login-form'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <ForgetPasswordForm />
                    <Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                            size='large'
                        >
                            Request new Password
                        </Button>
                        <a href='/login'>already have account login</a>
                    </Form.Item>
                </Form>
            </Loading>
        )
    };
    if (!isSuccess) {
        return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Forgot Password" />
    } else {
        return (
            <Result
                status="success"
                title="Check your email address to reset your Password"
                subTitle="Password reste in Progress"
                style={{ maxWidth: '450px', margin: 'auto' }}
                extra={
                    <Button
                        type='primary'
                        onClick={() => {
                            navigate(`/login`)
                        }}
                    >
                        Login
                    </Button>
                }
            ></Result>
        )
    }
}