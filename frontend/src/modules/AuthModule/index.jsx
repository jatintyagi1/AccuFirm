import { Layout, Typography, Col, Divider } from 'antd';

import SideContent from './SideContent';
import AuthLayout from '../../layout/AuthLayout';

const { Content } = Layout;
const { Title } = Typography;

const AuthModule = ({ authContent, AUTH_TITLE, isForRegistre = false }) => {
    return (
        <AuthLayout sideContent={<SideContent />} >
            <Content
                style={{
                    padding: isForRegistre ? '40px 30px 30px' : '100px 30px 30px',
                    maxWidth: '440px',
                    margin: '0 auto',
                }}
            >
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 0 }} span={0}>
                    <h1 style={{ textAlign: 'center', color: '#000000' }}>AccuFirm</h1>

                    <div className='space10' />
                </Col>
                <Title level={1}>{AUTH_TITLE}</Title>

                <Divider />
                <div className='site-layout-content'>{authContent}</div>
            </Content>
        </AuthLayout>
    )
}

export default AuthModule;