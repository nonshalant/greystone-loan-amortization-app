import React, { useState } from 'react'
import AmortizationTable from './partials/AmortizationTable'
import './loan.css'
import axios from 'axios'

const Loan = () => {
    const [ searchValue, setSearchValue] = useState('');
    const [ data, setData] = useState([]);
    const [ loanSchedule, setLoanSchedule ] = useState('');

    const handleChange = (e) =>{
        setSearchValue(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
          
        await axios({
          method: 'get',
          baseURL: `https://lending-api.azurewebsites.net/users/${searchValue}/loans`,
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(resp=>setData(resp.data))
        .catch(error => console.error(error))

        setSearchValue('');
      }

  return (
    <div className='loan'>
        <div className="loan-form">
            <h2>Enter your id to view your loans</h2>
            <form onSubmit={handleSubmit} className="search-input">
                <input type="text" name="search" id="search" onChange={handleChange} value={searchValue} placeholder='Enter ID'/>
                <button>Search</button>
            </form>
        </div>
        <div className="loan-details">
            <AmortizationTable 
                data={data}
                setLoanSchedule={setLoanSchedule}
                loanSchedule={loanSchedule}
            />
        </div>
    </div> 
  )
}

export default Loan