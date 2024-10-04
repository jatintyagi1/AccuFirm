import React, { useState, useEffect } from "react";
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
import { request } from "../request";

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
    const { pagination } = state;
    setState({ loading: true });
    const ajaxCall = request.list(target, { page: pagination.current });
    ajaxCall.then(function (response) {
      if (!response || response.success === false) {
        setState({
          loading: false,
          data: [],
          pagination: { ...state.pagination },
        });
        return;
      }

      setState({
        loading: false,
        data: response.result,
        pagination: {
          ...state.pagination,
          current: parseInt(response.pagination.page),
          total: response.pagination.count,
        },
      });
    });
  };

  useEffect(() => {
    fetchData(state);
  }, []);

  const handleTableChange = (pagination) => {
    fetchData({ pagination });
  };

  const { data, pagination, loading } = state;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <div style={{ padding: "20px 0px" }}>
        <Typography.Title level={2}>Title</Typography.Title>
        <Typography.Text type="secondary">This is a subtitle</Typography.Text>
        <Tag color="blue">Running</Tag>
        <div style={{ marginTop: 16 }}>
          <Button key="2">Refresh</Button>
          <Button key="1" type="primary" onClick={showModal}>
            Add new Customer
          </Button>
        </div>
        <Row style={{ marginTop: 24 }}>
          <Statistic title="Status" value="Pending" />
          <Statistic
            title="Price"
            prefix="$"
            value={568.08}
            style={{ margin: "0 32px" }}
          />
          <Statistic title="Balance" prefix="$" value={3345.08} />
        </Row>
      </div>

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
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </>
  );
}
