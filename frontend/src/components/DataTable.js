import React, { useState } from "react";
import {
  Table,
  Modal,
  Dropdown,
  Tag,
  Button,
  Statistic,
  Descriptions,
  Typography,
  Row,
  Col,
} from "antd";

import FormPatient from "./FormPatient";

const { Title } = Typography;

export default function DataTable({ target, columns }) {
  const [state, setState] = useState({
    data: [],
    pagination: {
      defaultCurrent: 1,
      current: 1,
      pageSize: 10,
      total: 1,
    },
    loading: false,
  });

  const fetchData = (state) => {
    // Fetching logic...
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <Col>
          <Title level={4}>Title</Title>
          <Tag color="blue">Running</Tag>
          <p>This is a subtitle</p>
        </Col>
        <Col>
          <Button key="2">Refresh</Button>
          <Button key="1" type="primary" onClick={showModal}>
            Add new Customer
          </Button>
        </Col>
      </Row>
      <Row>
        <Statistic title="Status" value="Pending" />
        <Statistic
          title="Price"
          prefix="$"
          value={568.08}
          style={{
            margin: "0 32px",
          }}
        />
        <Statistic title="Balance" prefix="$" value={3345.08} />
      </Row>

      <Modal
        title="Add new Patient"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <FormPatient />
      </Modal>
      <Table
        columns={columns}
        rowKey={(record) => record._id}
        dataSource={state.data}
        pagination={state.pagination}
        loading={state.loading}
        onChange={(pagination) => fetchData({ pagination })}
      />
    </>
  );
}
