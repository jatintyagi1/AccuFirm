import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Statistic, Row, Tag, Typography } from "antd";
import FormPatient from "./FormPatient";
import { listSync } from "../axiosRequest";

const { Title } = Typography;

export default function DataTable({ target, columns }) {
  const [state, setState] = useState({
    data: [],
    pagination: {
      defaultCurrent: 1, // Ensure default page is always 1
      pageSize: 10,      // Default page size
      total: 1,          // Total count
    },
    loading: false,
  });

  // Function to fetch data
  const fetchData = (state) => {
    const pagination = state.pagination || {
      defaultCurrent: 1,
      pageSize: 10,
      total: 1,
    }; // Ensure pagination object is initialized

    setState((prevState) => ({ ...prevState, loading: true }));

    // API call to fetch data
    listSync(target, { page: pagination.defaultCurrent })
      .then((response) => {
        if (!response || response.success === false) {
          setState({
            loading: false,
            data: [],
            pagination: { ...state.pagination },
          });
          return;
        }

        const responsePagination = response.pagination || {
          page: 1,
          count: 0,
        };

        setState({
          loading: false,
          data: response.result || [],
          pagination: {
            defaultCurrent: responsePagination.page || 1,
            pageSize: response.result ? response.result.length : 10,
            total: responsePagination.count || 0,
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setState({ loading: false });
      });
  };

  useEffect(() => {
    fetchData(state); // Ensure state is passed in initial fetch
  }, []);

  const handleTableChange = (pagination) => {
    fetchData({ pagination: { ...pagination } });
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
      <Title level={3} style={{ padding: "20px 0px" }}>
        Title
      </Title>
      <Tag color="blue">Running</Tag>
      <p>This is a subtitle</p>
      <Row>
        <Button key="2" onClick={() => fetchData(state)}>
          Refresh
        </Button>
        <Button key="1" type="primary" onClick={showModal}>
          Add new Customer
        </Button>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
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
        title="Add new Customer"
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
