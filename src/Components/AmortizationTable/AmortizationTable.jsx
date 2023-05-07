import React, { useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const AmortizationTable = () => {
  const [ data, setData] = useState([]);
  const [ searchValue, setSearchValue] = useState('');

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

  const handleChange = (e) =>{
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios({
      method: 'get',
      baseURL: `https://lending-api.azurewebsites.net/users/${searchValue}/loans`,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp=>setData(resp.data))
  }

  return (
    <>
      <div className="search">
        <form onSubmit={handleSubmit} className="search-input">
          <label htmlFor="">Enter user ID to view loan</label>
          <input type="text" name="search" id="search" onChange={handleChange} value={searchValue} placeholder='Enter ID'/>
        </form>
      </div>
      
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
}

export default AmortizationTable;
