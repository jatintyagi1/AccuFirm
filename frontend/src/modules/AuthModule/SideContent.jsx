import { Space, Layout, Divider, Typography } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
    return (
        <Content
            style={{
                padding: '150px 30px 30px',
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
            }}
            className="sideContent"
        >
            <div style={{ width: '100%' }}>
                <h1 style={{ textAlign: 'center', color: '#000000'}}>AccuFirm</h1>
                <div className='space40'></div>

                <Title level={3}>Manage your Company with :</Title>

                <div className='space20'></div>
                <ul className='list-checked' style={{ paddingRight: 0 }}>
                    <li>
                        <Space direction='vertical'>
                            <Text strong>All-in-one-Tool</Text>

                            <Text>Run and scale up Your business</Text>
                        </Space>

                        <li>
                            <Space direction='vertical'>
                                <Text strong>Easily add and manage your services</Text>
                                <Text>It bring together your invoice clients snd leads</Text>
                            </Space>
                        </li>
                    </li>
                </ul>
                <Divider />
            </div>
        </Content>
    )
}