import { Form, Button } from 'antd';

import RegisterForm from '../forms/RegisterForm'

const RegisterPage = () => {

    const onFinish = () => {

    }
    return(
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
export default RegisterPage;