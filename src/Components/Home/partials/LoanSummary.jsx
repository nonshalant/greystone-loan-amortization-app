import React from 'react'

const LoanSummary = () => {
  return (
    <div className='summary'>
        <div className="summary-heading">
            <h2>Summary</h2>
            <p>Number of payments: 360</p>
        </div>
        <div className="summary-details">
            <div className="summary-col">
                <h3>Monthly payment</h3>
                <p>18,000</p>
            </div>
            <div className="summary-col">
                <h3>Total interest paid</h3>
                <p>18,000</p>
            </div>
            <div className="summary-col">
                <h3>Total cost of loan</h3>
                <p>18,000</p>
            </div>
            <div className="summary-col">
                <h3>Payoff date</h3>
                <p>May 3, 2024</p>
            </div>
        </div>
    </div>
  )
}

export default LoanSummary