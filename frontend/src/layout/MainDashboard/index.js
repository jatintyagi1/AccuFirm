import React from "react";
import { UiContextProvider } from "../../Context/ui";

import Navigation from "../../components/Navigation";

import { Layout } from "antd";

function MainDashboard({ children }) {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navigation />
            <UiContextProvider>{children}</UiContextProvider>
        </Layout>
    );
}

export default MainDashboard;