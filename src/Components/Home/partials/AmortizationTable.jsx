import React from 'react';
import { Table } from 'antd';

const AmortizationTable = ({ data }) => {

  const columns = [
    {
      title: 'Payment #',
      dataIndex: 'paymentNum',
      key: 'paymentNum',
    },
    {
      title: 'Payment Date',
      dataIndex: 'paymentDate',
      key: 'paymentDate',
    },
    {
      title: 'Payment Amount',
      dataIndex: 'paymentAmount',
      key: 'paymentAmount',
    },
    {
      title: 'Principal',
      dataIndex: 'principal',
      key: 'principal',
    },
    {
      title: 'Interest',
      dataIndex: 'interest',
      key: 'interest',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];

  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  );
}

export default AmortizationTable;
