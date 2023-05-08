import React, { useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import LoanScheduleTable from './LoanScheduleTable';
import { Link } from 'react-router-dom';

const AmortizationTable = ({ data, loanSchedule, setLoanSchedule }) => {

  const [selectedLoan, setSelectedLoan] = useState({
    loan_id: '',
    user_id: ''
  });

  const columns = [
    {
      title: 'Payment Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Apr',
      dataIndex: 'apr',
      key: 'apr',
    },
    {
      title: 'Term',
      dataIndex: 'term',
      key: 'term',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Owners id',
      dataIndex: 'owner_id',
      key: 'owner_id',
    },
  ];

  const handleRowClick = (record) => {    
    setSelectedLoan({
      loan_id: record.id,
      user_id: record.owner_id
    });
    fetchSchedule();
  };

  const fetchSchedule = async() => {
    await axios({
      method: 'get',
      baseURL: `https://lending-api.azurewebsites.net/loans/${selectedLoan.loan_id}`,
      params: selectedLoan, 
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => setLoanSchedule(resp))
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className='table'>    
      <div className="scrollable">
        {
          loanSchedule ? 
            <LoanScheduleTable 
              loanSchedule={loanSchedule}
            />
            :
            <Table  
              columns={columns} 
              dataSource={data} 
              pagination={false} 
              rowKey={(record) => record.key} 
              onRow={(record) => {return {onClick: () => handleRowClick(record)}}} 
            />
        }
      </div>
    </div>
  );
};

export default AmortizationTable;
