import React, { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import NavigationContext from "../../Context/NavigationContext";
import UserContext from "../../Context/UserContext";
import { Layout, Avatar, Menu, Dropdown, Button, message, Popconfirm } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { logout } from "../../auth/auth.service";

const { Header } = Layout;

export default function HeaderContent() {
  const { setUserData } = useContext(UserContext);
  const { collapsed, setCollapsed } = useContext(NavigationContext);

  const handleLogout = () => {
    // Optional: Show a confirmation message before logout
    Popconfirm({
      title: "Are you sure you want to log out?",
      onConfirm: () => logout(setUserData),
      okText: "Yes",
      cancelText: "No",
    });
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ padding: 0, background: "none" }}>
      <MenuOutlined
        className="trigger"
        style={{ fontSize: "20px", paddingLeft: "30px" }}
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle navigation"
      />
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </Header>
  );
}

// Optionally define PropTypes for validation
HeaderContent.propTypes = {
  setUserData: PropTypes.func.isRequired, // Ensures setUserData is a function
  collapsed: PropTypes.bool.isRequired, // Ensures collapsed is a boolean
  setCollapsed: PropTypes.func.isRequired, // Ensures setCollapsed is a function
};
