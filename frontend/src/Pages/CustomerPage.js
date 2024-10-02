import React, { useRef, useState } from "react";
import DashboardLayout from "./Layout/DashboardLayout";
import { Layout, Breadcrumb } from "antd";
import { DatePicker, TimePicker, Calendar } from "../antdComponents"; // Assuming you have custom date/time components
import DataTable from "../components/DataTable"; // Your data table component
import format from "dayjs";

const { Content } = Layout;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function CustomerPage() {
  // State for managing date selections or any other data
  const [selectedDate, setSelectedDate] = useState(null);

  // Columns for your DataTable, adjust according to your requirements
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    // Add more columns as needed
  ];

  return (
    <DashboardLayout>
      <Content style={{ padding: "20px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Customers</Breadcrumb.Item>
        </Breadcrumb>

        <div style={{ marginBottom: "20px" }}>
          <h2>Select Date</h2>
          <DatePicker onChange={(date) => setSelectedDate(date)} />
          {/* You can also add MonthPicker, RangePicker, or WeekPicker as needed */}
        </div>

        <DataTable target="customers" columns={columns} />
        {/* Pass the appropriate target prop for your API */}
      </Content>
    </DashboardLayout>
  );
}

export default CustomerPage;
