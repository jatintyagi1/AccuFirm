import React, { useContext } from "react";
import { Layout, Avatar, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import { ACCESS_TOKEN_NAME } from "../../config/serverApiConfig";

const { Header } = Layout;

export default function HeaderContent() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogout = () => {
    console.log(`before logout: ${userData.user?.name}`);
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    console.log(`after logout: ${userData.user?.name}`);
    navigate("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={onLogout}>Logout</Menu.Item>
      {/* Replace or add more menu items here */}
      <Menu.Item onClick={() => navigate("/profile")}>Profile</Menu.Item>
      <Menu.Item onClick={() => navigate("/settings")}>Settings</Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <Avatar>
          {userData.user?.name ? userData.user.name[0].toUpperCase() : <UserOutlined />}
        </Avatar>
      </Dropdown>
    </Header>
  );
}
