import React, { useState } from 'react'
import AmortizationTable from './partials/AmortizationTable'
import axios from 'axios'
import LoanScheduleTable from './partials/LoanScheduleTable'
import './loan.css'

const Loan = () => {
    const [ searchValue, setSearchValue] = useState('');
    const [ data, setData] = useState([]);
    const [ loanSchedule, setLoanSchedule ] = useState('');
    const [ responseMsg, setResponseMsg] = useState('');

    const handleChange = (e) =>{
        setSearchValue(e.target.value)
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
          
        await axios({
          method: 'get',
          baseURL: `https://lending-api.azurewebsites.net/users/${searchValue}/loans`,
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(resp=>{
          setData(resp.data)
          setResponseMsg('Click a Loan to view the loan schedule')
        })
        .catch(error => setResponseMsg(error.response.statusText));
        setSearchValue('');
      };

  return (
    <div className='loan'>
      <div className="loan-form">
        <h2>Enter your user ID to view your loans</h2>
        <form onSubmit={handleSubmit} className="search-input">
            <input required type="text" name="search" id="search" onChange={handleChange} value={searchValue} placeholder='Enter ID'/>
            <button>Search</button>
        </form>
      </div>
      <div className="loan-details">
        {
          loanSchedule ? 
            <LoanScheduleTable 
              loanSchedule={loanSchedule}
            />  
          :
            <AmortizationTable 
              responseMsg={responseMsg}
              data={data}
              setLoanSchedule={setLoanSchedule}
              loanSchedule={loanSchedule}
            />
        }
      </div>
    </div> 
  )
}

export default Loan