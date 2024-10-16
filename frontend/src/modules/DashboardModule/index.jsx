import { useState } from 'react';
import { Tag, Row, Col } from 'antd';

import RecentTable from './components/RecentTable';
import SummaryCard from './components/SummaryCard';
import PreviewCard from './components/PreviewCard';
import CustomerPreviewCard from './components/CustomerPreviewCard';

export default function DashboardModule() {

  // Dummy data to simulate frontend behavior
  const dummyStats = [
    { status: 'Paid', percentage: 75 },
    { status: 'Unpaid', percentage: 25 },
  ];

  const moneyFormatter = ({ amount, currency_code }) => {
    return `${currency_code} ${amount.toFixed(2)}`;
  };

  const dataTableColumns = [
    {
      title: 'Number',
      dataIndex: 'number',
    },
    {
      title: 'Client',
      dataIndex: ['client', 'name'],
    },
    {
      title: 'Total',
      dataIndex: 'total',
      onCell: () => {
        return {
          style: {
            textAlign: 'right',
            whiteSpace: 'nowrap',
            direction: 'ltr',
          },
        };
      },
      render: (total, record) => moneyFormatter({ amount: total, currency_code: record.currency }),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => {
        return <Tag color={'blue'}>{status}</Tag>;
      },
    },
  ];

  const statisticCards = dummyStats.map((item, index) => (
    <PreviewCard
      key={index}
      title={item.status}
      isLoading={false}
      entity={'dummy'}
      statistics={[{ tag: item.status, color: 'blue', value: item.percentage }]}
    />
  ));

  return (
    <>
      <Row gutter={[32, 32]}>
        <SummaryCard title={'Invoices'} tagColor={'cyan'} prefix={'This month'} isLoading={false} data={10000} />
        <SummaryCard title={'Proforma Invoices'} tagColor={'purple'} prefix={'This month'} isLoading={false} data={5000} />
        <SummaryCard title={'Offers'} tagColor={'green'} prefix={'This month'} isLoading={false} data={8000} />
        <SummaryCard title={'Unpaid'} tagColor={'red'} prefix={'Not Paid'} isLoading={false} data={3000} />
      </Row>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
          <div className="whiteBox shadow" style={{ height: 458 }}>
            <Row className="pad20" gutter={[0, 0]}>
              {statisticCards}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }}>
          <CustomerPreviewCard isLoading={false} activeCustomer={200} newCustomer={10} />
        </Col>
      </Row>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
            <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>Recent Invoices</h3>
            <RecentTable entity={'invoice'} dataTableColumns={dataTableColumns} />
          </div>
        </Col>
        <Col className="gutter-row w-full" sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
            <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>Recent Quotes</h3>
            <RecentTable entity={'quote'} dataTableColumns={dataTableColumns} />
          </div>
        </Col>
      </Row>
    </>
  );
}
