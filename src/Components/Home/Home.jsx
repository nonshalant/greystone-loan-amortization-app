import React, { useState } from 'react'
import './home.css'
import LoanDetailsColumn from './partials/LoanDetailsColumn'
import Heading from './partials/Heading'
import CreateUser from './partials/CreateUser'

const Home = () => {
    const [userCreated, setUserCreated] = useState(false);

  return (
    <div className='home-container'>
        <div className='main'> 
        {
            userCreated === false ?  
                <div className='main-col'>
                    <Heading /> 
                    <CreateUser setUserCreated={setUserCreated}/>
                </div>
                :
                <div className='main-col '>
                    <LoanDetailsColumn />
                </div> 
        }
        </div>
    </div>
  )
}

export default Home