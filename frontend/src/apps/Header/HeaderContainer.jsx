import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Layout } from 'antd';
import { LogoutOutlined, ToolOutlined, UserOutlined } from '@ant-design/icons';



const { Header } = Layout;

export default function HeaderContent() {

    const ProfileDropdown = () => {
        const navigate = useNavigate();
        return (
            <div className='profileDropdown' onClick={() => navigate('profile')}>
                <Avatar
                    size='large'
                    className='last'
                    style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        boxShadow: 'rgba(150, 190, 238, 0.35) 0px 0px 6px 1px',
                    }}
                >
                    JATIN TYAGI
                </Avatar>
                <div className='profileDropdownInfo'>
                    <p>
                        Jatin Tyagi
                    </p>
                    <p>
                        tyagijatin6263@gmail.com
                    </p>
                </div>
            </div>
        )
    };

    const DropdownMenu = ({ text }) => {
        return <span>{text}</span>
    }


    const items = [
        {
            label: <ProfileDropdown className="headerDropDownMenu" />,
            key: 'ProfileDropdown',
        },
        {
            type: 'divider',
        },
        {
            icon: <UserOutlined />,
            key: 'settingProfile',
            label: <DropdownMenu text={'profile_settings'} />,
        },
        {
            icon: <ToolOutlined />,
            key: 'settingApp',
            label: 'app_settings',
        },

        {
            type: 'divider',
        },

        {
            icon: <LogoutOutlined />,
            key: 'logout',
            label: 'logout',
        },
    ]

    return (
        <Header
            style={{
                padding: '20px',
                background: '#f9fafc',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '15px',
            }}
        >
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                placement="bottomRight"
                stye={{ width: '280px', float: 'right' }}
            >
                <Avatar
                    className='last'
                    style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        boxShadow: 'rgba(150, 190, 238, 0.35) 0px 0px 10px 2px',
                        float: 'right',
                        cursor: 'pointer',
                    }}
                    size='large'
                >
                    JATIN TYAGI
                </Avatar>
            </Dropdown>
        </Header>
    )
}