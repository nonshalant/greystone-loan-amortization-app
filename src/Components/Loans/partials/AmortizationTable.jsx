import React, { useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const AmortizationTable = ({ data, setLoanSchedule, responseMsg }) => {
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

  const handleRowClick = async(record) => {    
    setSelectedLoan({
      loan_id: record.id,
      user_id: record.owner_id
    });
    
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
      {
        responseMsg &&
          <div className="response-small">
            <p>{responseMsg}</p>
          </div>
      }
      <div className="scrollable">
        <Table  
          columns={columns} 
          dataSource={data} 
          pagination={false} 
          rowKey={(record) => record.key} 
          onRow={(record) => {return {style:{'cursor' : 'pointer'}, onClick: () => handleRowClick(record)}}} 
        />
      </div>
    </div>
  );
};

export default AmortizationTable;