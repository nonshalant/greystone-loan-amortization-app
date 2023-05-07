import React from 'react'

const LoanDetailsColumn = () => {
  return (
    <div className="details-column">
      <form className='loan-form'>
        <div className="column">
          <label htmlFor="">Desired loan amount</label>
          <input type="text" name="amount" pattern='[0-9]*' placeholder='$ 0' id="" />
        </div>
        <div className="column">
          <label htmlFor="">Desired loan term</label>
          <input type="text" name="" pattern='[0-9]*' placeholder='year' id="" />
        </div>
        <div className="column">
          <label htmlFor="">Estimated interest rate</label>
          <input type="text" name="" pattern='[0-9]*' placeholder='%' id="" />
        </div>
        <button className='submit-btn'>Calculate</button>
      </form>
    </div>
  )
}

export default LoanDetailsColumn