import axios from 'axios';
import React, { useState } from 'react'

const LoanShareForm = () => {
    const [loanShareObj, setLoanShareObj] = useState({});
    const [responseMsg, setResponseMsg] = useState('');

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
      .then(resp=>setResponseMsg('Loan shared successfully:', resp.statusText))
      .catch(error =>{
        if (error.response) {
          setResponseMsg(error.response.data.detail);
        } else if (error.request) {
          setResponseMsg("The request was made but no response was received");
        } else {
          setResponseMsg("Something happened in setting up the request");
        }
      })
    }
  
  return (
    <div className='loan-share-form'>
        <h2>Share your loan with another user.</h2>
        <form className='loan-share-form-container' onSubmit={handleSubmit}>
          <div className="loan-col">
            <input required type="text" name="loan_id" id="loan_id" onChange={handleChange} placeholder='enter loan id'/>
          </div>
          <div className="loan-col">
            <input required type="text" name="owner_id" id="owner_id" onChange={handleChange} placeholder='enter owner id'/>
          </div>
          <div className="loan-col">
            <input required type="text" name="user_id" id="user_id" onChange={handleChange} placeholder='enter user id'/>
          </div>
          <button>Share</button>
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

export default LoanShareForm