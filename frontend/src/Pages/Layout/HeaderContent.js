import React, { useContext } from "react";
import { Layout, Avatar, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import UserContext from "../../Context/UserContext";
import { logout } from "../../auth/auth.service";

const { Header } = Layout;

const HeaderContent = () => {
  const { setUserData } = useContext(UserContext);

  const menu = (
    <Menu>
      <Menu.Item onClick={() => logout(setUserData)}>
        Logout
      </Menu.Item>
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
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </Header>
  );
};

export default HeaderContent;
