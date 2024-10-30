import { Layout } from 'antd';


import HeaderContent from './Header/HeaderContainer';
import Navigation from './Navigation/NavigationContainer';

import useResponsive from '../hooks/useResponsive';

import AppRouter from '../router/AppRouter';

export default function ErpApp() {
    const { Content } = Layout;

    const { isMobile } = useResponsive();

    return (
        <Layout hasSider>
            <Navigation />
            {isMobile ? (
                <Layout>
                    <HeaderContent />
                    <Content
                        style={{
                            margin: '40px auto 30px',
                            overflow: 'initial',
                            width: '100%',
                            padding: '0 25px',
                            maxWidth: 'none',
                        }}
                    >
                        <AppRouter />
                    </Content>
                </Layout>
            ) : (
                <Layout>
                    <HeaderContent />
                    <Content
                        style={{
                            margin: '40px auto 30px',
                            overflow: 'initial',
                            width: '100%',
                            padding: '0 50px',
                            maxWidth: 1400,
                        }}
                    >
                        <AppRouter />
                    </Content>
                </Layout>
            )}
        </Layout>
    )
}