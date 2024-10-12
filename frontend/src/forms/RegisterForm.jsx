import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';


export default function RegisterForm() {
    return (
        <>
            <Form.Item
                name="name"
                label="name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" size="large" />} />
            </Form.Item>

            <Form.Item
                name="email"
                label="email"
                rules={[
                    {
                        required: true,
                    },
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} type="email" size="large" />
            </Form.Item>

            <Form.Item
                name="password"
                label="password"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input prefix={<LockOutlined className="site-form-item-icon" />} size="large" />
            </Form.Item>
        </>
    )
}