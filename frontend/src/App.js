import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
} from "antd";

import './App.css';

const { Option } = Select;
const { Title } = Typography;

function App() {
  return (
    <>
      <section style={{ textAlign: "center", marginTop: 48, marginBottom: 40 }}>
        <Space align="start">
          <img
            style={{ width: 40, height: 40 }}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="Ant Design"
          />
          <Title level={2} style={{ marginBottom: 0 }}>
            Ant Design
          </Title>
        </Space>
      </section>
      <Divider style={{ marginBottom: 60 }}>Form</Divider>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Form.Item label="Number">
          <InputNumber min={1} max={10} defaultValue={3} />
          <span className="ant-form-text">Antd</span>
          <a href="https://ant.design">Link</a>
        </Form.Item>
        <Form.Item label="Switch">
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label="Slider">
          <Slider defaultValue={70} />
        </Form.Item>
        <Form.Item label="Selector">
          <Select defaultValue="lucy" style={{ width: 192 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>
              disabled
            </Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Duration">
          <DatePicker.RangePicker />
        </Form.Item>
        <Form.Item label="rate">
          <Rate defaultValue={5} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>

    </>
  );
}

export default App;
