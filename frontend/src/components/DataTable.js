import React, { useState, useEffect } from "react";
import {
  Table,
  Layout,
  Modal,
  Tag,
  Button,
  Statistic,
  Row,
  Col,
  Typography,
} from "antd";
import { listSync } from "../axiosRequest";

const { Title } = Typography;

export default function DataTable({ target, columns }) {
  const [state, setState] = useState({
    data: [],
    pagination: {
      defaultCurrent: 1,
      pageSize: 10,
      total: 1,
    },
    loading: false,
  });

  const fetchData = (state) => {
    const { pagination } = state;

    setState({ loading: true });
    const ajaxCall = listSync(target, { page: pagination.defaultCurrent });
    ajaxCall.then(function (response) {
      if (response === undefined || response.success === false) {
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
          defaultCurrent: response.pagination.page,
          pageSize: response.result.length,
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
      <Layout.Header style={{ padding: "0 20px" }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={2}>Title</Title>
          </Col>
          <Col>
            <Tag color="blue">Running</Tag>
          </Col>
          <Col>
            <Button key="1" type="primary" onClick={showModal}>
              Add new Patient
            </Button>
          </Col>
        </Row>
      </Layout.Header>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
