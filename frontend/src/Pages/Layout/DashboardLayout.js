import React, { useState } from "react";
import NavigationContext from "../../Context/NavigationContext"; 
import HeaderContent from "./HeaderContent";
import FooterContent from "./FooterContent";
import Navigation from "./Navigation";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function DashboardLayout({ contentLayout }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavigationContext.Provider value={{ collapsed, setCollapsed }}>
        <Navigation aria-label="Main Navigation" /> 
        <Layout className="site-layout">
          <HeaderContent />
          <Content
            className="site-layout-background"
            style={{
              padding: "50px 40px",
              margin: "50px auto",
              width: "100%",
              maxWidth: "1000px",
            }}
          >
            {contentLayout}
          </Content>
          <FooterContent />
        </Layout>
      </NavigationContext.Provider>
    </Layout>
  );
}

export default DashboardLayout;
