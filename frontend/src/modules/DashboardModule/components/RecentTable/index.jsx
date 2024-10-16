
import { Dropdown, Table } from 'antd';
import { EllipsisOutlined, EyeOutlined, EditOutlined, FilePdfOutlined } from '@ant-design/icons';


export default function RecentTable({ ...props }) {

    let { entity, dataTableColumns } = props;

    const items = [
        {
            label: 'Show',
            key: 'read',
            icon: <EyeOutlined />,
        },
        {
            label: 'Edit',
            key: 'edit',
            icon: <EditOutlined />,
        },
        {
            label: 'Download',
            key: 'download',
            icon: <FilePdfOutlined />,
        },
    ];

    const handleRead = () => {

    }

    const handleEdit = () => {

    }

    const handleDownload = () => {

    }


    dataTableColumns = [
        ...dataTableColumns,
        {
            title: '',
            key: 'action',
            render: (_, record) => (
                <Dropdown
                    menu={{
                        items,
                        onClick: ({ key }) => {
                            switch (key) {
                                case 'read':
                                    handleRead(record);
                                    break;
                                case 'edit':
                                    handleEdit(record);
                                    break;
                                case 'download':
                                    handleDownload(record);
                                    break;
                                default:
                                    break;
                            }
                        },
                    }}
                    trigger={['click']}
                >
                    <EllipsisOutlined
                        style={{ cursor: 'pointer', fontSize: '24px' }}
                        onClick={(e) => e.preventDefault()}
                    />
                </Dropdown>
            ),
        },
    ];


    return (
        <Table
            columns={dataTableColumns}
            rowKey={(item) => item._id}
            pagination={false}
            scroll={{ x: true }}
        />
    )
}