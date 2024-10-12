import React from "react";

import { UiContextProvider } from "../../Context/ui";
import Navigation from "../../components/Navigation";

import { Layout } from "antd";

// const { Content } = Layout;

// export default function DefaultLayout({ children, SidePanelContent }) {
//   return (
//     <MainDashboard>
//       <SidePanel>{SidePanelContent}</SidePanel>
//       <Layout className="site-layout">
//         <HeaderContent />
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: "50px 40px",
//             margin: "50px auto",
//             width: "100%",
//             maxWidth: "1000px",
//           }}
//         >
//           {children}
//         </Content>
//       </Layout>
//     </MainDashboard>
//   );
// }

function DefaultLayout({ children }) {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navigation />
            <UiContextProvider>{children}</UiContextProvider>
        </Layout>
    );
}

export default DefaultLayout;