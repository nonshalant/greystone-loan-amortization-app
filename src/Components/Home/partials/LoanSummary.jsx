import axios from 'axios'
import React from 'react'

const LoanSummary = () => {
    axios({
        method: 'get',
        
    })
  return (
    <div className='loan-summary'>
        <h2>Your estimated monthly payment</h2>
        <p>$0</p>
        <p>total principal pay</p>
        <p>$0</p>
        <p>total principal pay</p>
        <p>$0</p>
        <button>See amortization schedule</button>
    </div>
  )
}

export default LoanSummary