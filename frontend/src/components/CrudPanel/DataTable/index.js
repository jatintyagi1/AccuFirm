import React, { useCallback, useEffect } from "react";
import { Dropdown, Menu, Table } from "antd";
import { Layout, Row, Col, Tag, Button, Statistic } from "antd";
import {
    EllipsisOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { listAction } from "../../../redux/crud/action";
import { selectListItems } from "../../../redux/crud/selector";
import { useUiContext } from "../../../Context/ui";
import uniqueId from "../../../utils/uniqueid";

function AddNewItem() {
    const { uiContextAction } = useUiContext();
    return (
        <Button onClick={uiContextAction.panel.open} type="primary">
            Add new Customer
        </Button>
    );
}
const dropDownRowMenu = (currentRow) => {
    function Show() {
        console.log(currentRow._id);
    }
    function Edit() {
        console.log(currentRow._id);
    }
    function Delete() {
        console.log(currentRow._id);
    }
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

export default function DataTable({ entity, columns }) {
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

    const {
        result: listResult,
        isLoading: listIsLoading,
        isSuccess: listIsSuccess,
    } = useSelector(selectListItems);

    const { pagination, items } = listResult;

    const dispatch = useDispatch();

    const handelDataTableLoad = useCallback((pagination) => {
        dispatch(listAction(entity, pagination.current));
    }, []);

    useEffect(() => {
        dispatch(listAction(entity));
    }, []);

    return (
        <>
            <Layout.Header
                style={{
                    background: "#fff",
                    padding: "0px",
                    borderBottom: "1px solid #f0f0f0",
                }}
            >
                <Row justify="space-between" align="middle" style={{ padding: "0 20px" }}>
                    <Col>
                        <Button onClick={() => window.history.back()}>Back</Button>
                    </Col>
                    <Col>
                        <Tag color="blue">Running</Tag>
                        <span style={{ marginLeft: "10px" }}>Customer Page</span>
                        <p style={{ marginBottom: "0" }}>This is customer page</p>
                    </Col>
                    <Col>
                        <Button key={`${uniqueId()}`}>Refresh</Button>
                        <AddNewItem key={`${uniqueId()}`} />
                    </Col>
                </Row>
            </Layout.Header>
            <Row style={{ padding: "20px" }}>
                <Col span={8}>
                    <Statistic title="Status" value="Pending" />
                </Col>
                <Col span={8}>
                    <Statistic title="Price" prefix="$" value={568.08} />
                </Col>
                <Col span={8}>
                    <Statistic title="Balance" prefix="$" value={3345.08} />
                </Col>
            </Row>
            <Table
                columns={columns}
                rowKey={(item) => item._id}
                dataSource={items}
                pagination={pagination}
                loading={listIsLoading}
                onChange={handelDataTableLoad}
            />
        </>
    );
}