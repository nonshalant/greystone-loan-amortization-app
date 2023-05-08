import axios from 'axios'
import React, { useState } from 'react'

const LoanShare = () => {
  const [loanShareObj, setLoanShareObj] = useState({});

  const handleChange = (e) => {
    setLoanShareObj({
      ...loanShareObj, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) =>{ 
    e.preventDefault()
    const body = JSON.stringify(loanShareObj)

    await axios({
      method: 'post',
      baseURL: `https://lending-api.azurewebsites.net/loans/${loanShareObj.loan_id}/share`,
      data: body,
      params: {
        user_id: loanShareObj.user_id,
        owner_id: loanShareObj.owner_id
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp=>console.log('Loan shared successfully:', resp.data))
    .catch(error => console.error('Error sharing loan:', error.message))
  }

  return (
    <div className='loan-share'>
        <h2>Share a loan</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="loan_id" id="loan_id" onChange={handleChange} placeholder='enter'/>
          <input type="text" name="owner_id" id="owner_id" onChange={handleChange} placeholder='enter'/>
          <input type="text" name="user_id" id="user_id" onChange={handleChange} placeholder='enter'/>
          <button>Share</button>
        </form>
    </div>
  )
}

export default LoanShare