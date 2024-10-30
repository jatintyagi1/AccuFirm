import { useState, useEffect } from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';

import {
    SettingOutlined,
    CustomerServiceOutlined,
    ContainerOutlined,
    FileSyncOutlined,
    DashboardOutlined,
    TagOutlined,
    TagsOutlined,
    UserOutlined,
    CreditCardOutlined,
    MenuOutlined,
    FileOutlined,
    ShopOutlined,
    FilterOutlined,
    WalletOutlined,
    ReconciliationOutlined,
} from '@ant-design/icons';

import useResponsive from '../../hooks/useResponsive';

const { Sider } = Layout;

// Main Navigation
export default function Navigation() {
    const { isMobile } = useResponsive();
    return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />;
}

// Sidebar Function
function Sidebar() {
    const items = [
        { key: 'dashboard', icon: <DashboardOutlined />, label: 'dashboard' },
        { key: 'customer', icon: <CustomerServiceOutlined />, label: 'customers' },
        { key: 'people', icon: <UserOutlined />, label: 'peoples' },
        { key: 'Companies', icon: <ShopOutlined />, label: 'companies' },
        { key: 'Lead', icon: <FilterOutlined />, label: 'leads' },
        { key: 'Quote For Leads', icon: <FileOutlined />, label: 'offers' },
        { key: 'invoice', icon: <ContainerOutlined />, label: 'invoices' },
        { key: 'quote', icon: <FileSyncOutlined />, label: 'proforma invoices' },
        { key: 'payment', icon: <CreditCardOutlined />, label: 'payments' },
        { key: 'product', icon: <TagOutlined />, label: 'products' },
        { key: 'categoryproduct', icon: <TagsOutlined />, label: 'product_category' },
        { key: 'expenses', icon: <WalletOutlined />, label: 'expense' },
        { key: 'expensesCategory', icon: <ReconciliationOutlined />, label: 'expenses_category' },
        {
            label: 'Settings',
            key: 'settings',
            icon: <SettingOutlined />,
            children: [
                { key: 'generalSettings', label: 'settings' },
                { key: 'paymentMode', label: 'payment_modes' },
                { key: 'taxes', label: 'taxes' },
                { key: 'about', label: 'about' },
            ],
        },
    ];

    return (
        <Sider
            className="navigation"
            width={256}
            theme={'light'}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'relative',
                top: '20px',
                borderRadius: '8px',
            }}
        >
            <div className='logo' style={{ cursor: 'pointer' }}>
                <h1 style={{ marginLeft: '-5px', height: '40px' }}>AccuFirm</h1>
            </div>
            <Menu
                items={items}
                mode='inline'
                theme='light'
                style={{
                    background: 'none',
                    border: 'none',
                    width: 256,
                }}
            />
        </Sider>
    );
};


function MobileSidebar() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    return (
        <>
            <Button
                type='text'
                size='large'
                onClick={showDrawer}
                className="mobile-sidebar-btn"
                style={{ ['marginLeft']: 25 }}
            >
                <MenuOutlined style={{ fontSize: 18 }} />
            </Button>
            <Drawer
                width={250}
                contentWrapperStyle={{
                    boxShadow: 'none',
                }}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
                placement={'left'}
                closable={false}
                onClose={onClose}
                open={visible}
            >
                <Sidebar collapsible={false} isMobile={true} />
            </Drawer>
        </>
    )
}