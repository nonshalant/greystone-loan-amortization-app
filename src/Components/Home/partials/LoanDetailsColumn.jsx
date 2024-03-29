import axios from 'axios';
import React, { useState } from 'react'

const LoanDetailsColumn = () => {
  const [loanForm, setLoanForm] = useState({});
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setLoanForm({ ...loanForm, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const body = JSON.stringify(loanForm)
    
    await axios({
      method: 'post',
      baseURL: 'https://lending-api.azurewebsites.net/loans',
      data: body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp=>{
      setResponseMsg('Loan Successfully created!')
      setLoanForm({})
    })
    .catch(error => setResponseMsg('Loan creation DENIED! Please try again.'))
  }

  return (
    <div className="details-column">
      <form onSubmit={handleSubmit} className='loan-form'>
        <div className="column">
          <label htmlFor="amount">Desired loan amount</label>
          <input required type="text" name="amount" onChange={handleChange} placeholder='$ 0' id="amount" />
        </div>
        <div className="column">
          <label htmlFor="apr">Estimated apr</label>
          <input required type="text" name="apr" onChange={handleChange} placeholder='%' id="apr" />
        </div>
        <div className="column">
          <label htmlFor="term">Desired loan term</label>
          <input required type="text" name="term" onChange={handleChange} placeholder='year' id="term" />
        </div>
        <div className="column">
          <label htmlFor="owner_id">Owner Id</label>
          <input required type="text" name="owner_id" onChange={handleChange} placeholder='Id' id="owner_id" />
        </div>
        <div className="column">
          <label htmlFor="status">Status</label>
          <input required type="text" name="status" onChange={handleChange} placeholder='active or inactive' id="status" />
        </div>
        <button className='submit-btn'>Calculate</button>
      </form>
      {
        responseMsg &&
            <div className="response-message">
                <p>{responseMsg}</p>
            </div>
      }
    </div>
  )
}

export default LoanDetailsColumn