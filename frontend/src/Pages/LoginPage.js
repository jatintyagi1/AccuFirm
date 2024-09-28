import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../config/serverApiConfig";

import { Form, Input, Button, Checkbox, Layout, Row, Col, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Content, Footer } = Layout;

const LoginPage = () => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log("Received values of form: ", values);
        setLoading(true);
        try {
            const { username, password } = values;

            const loginRes = await Axios.post(API_BASE_URL + `login`, {
                email: username,  // Assuming username is actually an email
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem(ACCESS_TOKEN_NAME, loginRes.data.token);
            navigate("/");
        } catch (err) {
            console.log(err.response.data);
            err.response.data.error && setError(err.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout className="layout">
            <Row>
                <Col span={12} offset={6}>
                    <Content
                        style={{
                            padding: "150px 0 180px",
                            maxWidth: "360px",
                            margin: "0 auto",
                        }}
                    >
                        <h1>Login</h1>
                        {error && (
                            <ErrorNotice
                                message={error}
                                clearError={() => setError(undefined)}
                            />
                        )}
                        <Divider />
                        <div className="site-layout-content">
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: "Please input your Username!" }]}
                                >
                                    <Input
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="Username"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: "Please input your Password!" }]}
                                >
                                    <Input.Password
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="/forgot-password">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                        loading={loading}
                                    >
                                        Log in
                                    </Button>
                                    Or <a href="/register">register now!</a>
                                </Form.Item>
                            </Form>
                        </div>
                    </Content>
                </Col>
            </Row>

            <Footer style={{ textAlign: "center" }}>
                Open Source Accounting Project based on AntD & React ©2024 Created by Jatin Tyagi
            </Footer>
        </Layout>
    );
};

export default LoginPage;
