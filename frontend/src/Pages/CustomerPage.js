import React from "react";
import DashboardLayout from "./Layout/DashboardLayout";
import { Layout, Breadcrumb } from "antd";
import { DatePicker, TimePicker, Calendar } from "../antdComponents";
import dayjs from "dayjs";  // Updated import for dayjs

const { Content } = Layout;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const DaysPage = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  return (
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
            <div>
              <DatePicker onChange={onChange} />
              <br />
              <MonthPicker onChange={onChange} placeholder="Select month" />
              <br />
              <RangePicker onChange={onChange} />
              <br />
              <WeekPicker onChange={onChange} placeholder="Select week" />
            </div>
            <Calendar onPanelChange={onPanelChange} />
            <div>
              <TimePicker
                defaultValue={dayjs("12:08:23", "HH:mm:ss")}
                size="large"
              />
              <TimePicker defaultValue={dayjs("12:08:23", "HH:mm:ss")} />
              <TimePicker
                defaultValue={dayjs("12:08:23", "HH:mm:ss")}
                size="small"
              />
            </div>
          </div>
        </Content>
      }
    />
  );
};

export default DaysPage;
