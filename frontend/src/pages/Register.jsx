import { Form, Button } from 'antd';

import RegisterForm from '../forms/RegisterForm'
import AuthModule from '../modules/AuthModule';

const RegisterPage = () => {

    const onFinish = (values) => {
        console.log(values)
    }

    const FormContainer = () => {
        return (
            <Form
                layout='vertical'
                name='normal_login'
                className='login-form'
                initialValues={{
                    remmber: true,
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
        )
    }
    return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign Up" />
}
export default RegisterPage;