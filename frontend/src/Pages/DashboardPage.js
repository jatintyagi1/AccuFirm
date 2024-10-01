import React from "react";

import DashboardLayout from "./Layout/DashboardLayout";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

const Dashboard = () => (
    <DashboardLayout
        contentLayout={
            <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                >
                    Bill is a cat.
                </div>
            </Content>
        }
    />
);

export default Dashboard;
