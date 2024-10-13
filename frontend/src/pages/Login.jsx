import { Form, Button } from 'antd';

import AuthModule from '../modules/AuthModule'
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {

    const onFinish = (values) => {
        console.log(values)
    }

    const FormContainer = () => {
        return (
            <Form
                layout="vertical"
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <LoginForm />
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        size="large"
                    >
                        Log in
                    </Button>

                    <Button
                        type='primary'
                        htmlType='button'
                        className='login-form-button'
                        size='large'
                    >
                        Register
                    </Button>
                </Form.Item>
            </Form>
        )
    };

    return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign in" />
}
export default LoginPage;