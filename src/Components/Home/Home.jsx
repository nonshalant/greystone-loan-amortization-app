import React, { useState } from 'react'
import LoanDetailsColumn from './partials/LoanDetailsColumn'
import Heading from './partials/Heading'
import CreateUser from './partials/CreateUser'
import './home.css'

const Home = () => {
    const [createOption, setCreateOption] = useState('');

    const handleClick = (e) =>{ 
        setCreateOption(e.target.innerText)
    };
    
  return (
    <div className='home-container'>
        <Heading setCreateOption={setCreateOption}/> 
        <div className="options">
            <p onClick={handleClick}>Create a new user</p>
            <p onClick={handleClick}>Create a new loan</p>
        </div>
        {
            createOption === 'Create a new user' ?  
                <CreateUser /> : <LoanDetailsColumn />        
        }
    </div>
  )
}

export default Home