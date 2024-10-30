import { useState, useEffect } from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

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
        {
            key: 'dashboard',
            icon: <DashboardOutlined />,
            label: <Link to='/'>dashboard</Link>
        },
        {
            key: 'customer',
            icon: <CustomerServiceOutlined />,
            label: <Link to='/customers'>customers</Link>
        },
        {
            key: 'people',
            icon: <UserOutlined />,
            label: <Link to='/peoples'>peoples</Link>
        },
        {
            key: 'companies',
            icon: <ShopOutlined />,
            label: <Link to='/companies'>companies</Link>
        },
        {
            key: 'lead',
            icon: <FilterOutlined />,
            label: <Link to='/leads'>leads</Link>
        },
        {
            key: 'quoteForLeads',
            icon: <FileOutlined />,
            label: <Link to='/offers'>offers</Link>
        },
        {
            key: 'invoice',
            icon: <ContainerOutlined />,
            label: <Link to='/invoices'>invoices</Link>
        },
        {
            key: 'quote',
            icon: <FileSyncOutlined />,
            label: <Link to='/proforma-invoices'>proforma invoices</Link>
        },
        {
            key: 'payment',
            icon: <CreditCardOutlined />,
            label: <Link to='/payments'>payments</Link>
        },
        {
            key: 'product',
            icon: <TagOutlined />,
            label: <Link to='/products'>products</Link>
        },
        {
            key: 'categoryProduct',
            icon: <TagsOutlined />,
            label: <Link to='/product-category'>product_category</Link>
        },
        {
            key: 'expenses',
            icon: <WalletOutlined />,
            label: <Link to='/expense'>expense</Link>
        },
        {
            key: 'expensesCategory',
            icon: <ReconciliationOutlined />,
            label: <Link to='/expenses-category'>expenses_category</Link>
        },
        {
            label: 'Settings',
            key: 'settings',
            icon: <SettingOutlined />,
            children: [
                { key: 'generalSettings', label: <Link to='/settings'>settings</Link> },
                { key: 'paymentMode', label: <Link to='/payment-modes'>payment_modes</Link> },
                { key: 'taxes', label: <Link to='/taxes'>taxes</Link> },
                { key: 'about', label: <Link to='/about'>about</Link> },
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