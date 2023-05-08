import axios from 'axios';
import React, { useState } from 'react'

const LoanDetailsColumn = () => {
  const [loanForm, setLoanForm] = useState({});

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
      console.log(resp)
      setLoanForm({})
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="details-column">
      <h2>Calculate your home mortgage debt and display your payment breakdown of interest paid, principal paid and loan balance over the life of the loan.</h2>
      <form onSubmit={handleSubmit} className='loan-form'>
        <div className="column">
          <label htmlFor="">Desired loan amount</label>
          <input type="text" name="amount" onChange={handleChange} placeholder='$ 0' id="" />
        </div>
        <div className="column">
          <label htmlFor="">Estimated apr</label>
          <input type="text" name="apr" onChange={handleChange} placeholder='%' id="" />
        </div>
        <div className="column">
          <label htmlFor="">Desired loan term</label>
          <input type="text" name="term" onChange={handleChange} placeholder='year' id="" />
        </div>
        <div className="column">
          <label htmlFor="">Owner Id</label>
          <input type="text" name="owner_id" onChange={handleChange} placeholder='Id' id="" />
        </div>
        <div className="column">
          <label htmlFor="">Status</label>
          <input type="text" name="status" onChange={handleChange} placeholder='active or inactive' id="" />
        </div>
        <button className='submit-btn'>Calculate</button>
      </form>
    </div>
  )
}

export default LoanDetailsColumn