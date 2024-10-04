import React, { useState, useEffect } from "react";
import {
    Dropdown,
    Menu,
    Button,
    Row,
    Statistic,
    Table,
    Tag,
    Typography
} from "antd";
import {
    EllipsisOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import Modal from "antd/lib/modal/Modal";
import FormCustomer from "./formCustomer";
import { loadCustomers } from "../redux/customer/action";

export default function CustomerTable({ entity, columns }) {
    const dropDownRowMenu = (currentRow) => {
        const Show = () => console.log(currentRow._id);
        const Edit = () => console.log(currentRow._id);
        const Delete = () => console.log(currentRow._id);

        return (
            <Menu style={{ width: 130 }}>
                <Menu.Item icon={<EyeOutlined />} onClick={Show}>
                    Show
                </Menu.Item>
                <Menu.Item icon={<EditOutlined />} onClick={Edit}>
                    Edit
                </Menu.Item>
                <Menu.Item icon={<DeleteOutlined />} onClick={Delete}>
                    Delete
                </Menu.Item>
            </Menu>
        );
    };

    columns = [
        ...columns,
        {
            title: "",
            render: (row) => (
                <Dropdown overlay={dropDownRowMenu(row)} trigger={["click"]}>
                    <EllipsisOutlined style={{ cursor: "pointer", fontSize: "24px" }} />
                </Dropdown>
            ),
        },
    ];

    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers);

    const handelDataTableLoad = (customers) => {
        const { pagination } = customers;
        dispatch(loadCustomers(entity, pagination.current));
    };

    useEffect(() => {
        handelDataTableLoad(customers);
    }, []);

    const handleTableChange = (pagination) => {
        handelDataTableLoad({ pagination });
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const handleOk = () => setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);

    return (
        <>
            <div style={{ padding: "20px 0px" }}>
                <Typography.Title level={2}>Customer Page</Typography.Title>
                <Typography.Text type="secondary">This is customer page</Typography.Text>
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
                <FormCustomer
                    entity={entity}
                    closeModel={() => setIsModalVisible(false)}
                />
            </Modal>

            <Table
                columns={columns}
                rowKey={(record) => record._id}
                dataSource={customers.list}
                pagination={customers.pagination}
                loading={customers.loading}
                onChange={handleTableChange}
            />
        </>
    );
}
