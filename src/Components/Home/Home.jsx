import React from 'react'
import './home.css'
import LoanDetailsColumn from './partials/LoanDetailsColumn'
import LoanSummary from './partials/LoanSummary'
import AmortizationTable from './partials/AmortizationTable'
import Heading from './partials/Heading'

const Home = () => {
  return (
    <>
        <Heading />
        <div className='main'> 
            <div className='col-left'> 
            <LoanDetailsColumn/>
            </div>
            <div className='col-right'>
            <LoanSummary />
            </div>
        </div>
        <AmortizationTable />
    </>
  )
}

export default Home