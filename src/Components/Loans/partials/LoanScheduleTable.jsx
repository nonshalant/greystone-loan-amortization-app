import { Table } from 'antd';
import React from 'react'

const LoanScheduleTable = ({ loanSchedule }) => {

  const { data } = loanSchedule;

  const columns = [
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: 'Open balance',
      dataIndex: 'open_balance',
      key: 'open_balance',
    },
    {
      title: 'Total payment',
      dataIndex: 'total_payment',
      key: 'total_payment',
    },
    {
      title: 'Principal payment',
      dataIndex: 'principal_payment',
      key: 'principal_payment',
    },
    {
      title: 'Interest payment',
      dataIndex: 'interest_payment',
      key: 'interest_payment',
    },
    {
      title: 'Close balance',
      dataIndex: 'close_balance',
      key: 'close_balance',
    },
  ];
  return (
    <div className='loan-schedule'>
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={false} 
        />
        <div className="redirect">
          <button>Back</button>
        </div>
    </div>
  )
}

export default LoanScheduleTable