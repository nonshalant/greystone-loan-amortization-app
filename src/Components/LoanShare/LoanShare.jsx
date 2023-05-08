import React from 'react'
import './loanShare.css'
import LoanShareForm from './partials/LoanShareForm';
import LoanShareImage from './partials/LoanShareImage';

const LoanShare = () => {
  return (
    <div className='loan-share'>
       <LoanShareForm />
       <LoanShareImage />
    </div>
  )
}

export default LoanShare