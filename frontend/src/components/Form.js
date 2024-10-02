import React from "react";
import ReactDOM from "react-dom"; 
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Switch,
} from "antd";

export default function FormPatient() {
  const onFinish = (values) => {
    console.log("Received values: ", values);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      size="large"
      onFinish={onFinish} 
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="surname"
        rules={[
          {
            required: true,
            message: "Please input your surname!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Birthday"
        name="birthday"
        rules={[
          {
            required: true,
            message: "Please input your birthday!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="gender" // Changed to 'gender' for consistency
        rules={[
          {
            required: true,
            message: "Please select your gender!",
          },
        ]}
      >
        <Select>
          <Select.Option value="men">Men</Select.Option>
          <Select.Option value="women">Women</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not a valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Enabled" name="enabled">
        <Switch />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit">Submit</Button> 
      </Form.Item>
    </Form>
  );
}

const mountNode = document.getElementById("root"); 
ReactDOM.render(<FormPatient />, mountNode);
