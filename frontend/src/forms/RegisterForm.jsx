import { Form, Input, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import { countryList } from '../utils/CountryList';

export default function RegisterForm({ userLocation }) {
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

            <Form.Item
                label='country'
                name='country'
                rules={[
                    {
                        required: true,
                    }
                ]}
                initialValue={userLocation}
            >
                <Select
                    showSearch
                    defaultOpen={false}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().startsWith((optionB?.label ?? '').toLowerCase())
                    }
                    style={{
                        width: '100%',
                    }}
                    size="large"
                >
                    {countryList.map((language) => (
                        <Select.Option
                            key={language.label}
                            value={language.value}
                            label={language.label}
                        >
                            {language?.icon && language?.icon + ''}
                            {language.label}
                        </Select.Option>
                    ))}
                </Select>

            </Form.Item>
        </>
    )
}