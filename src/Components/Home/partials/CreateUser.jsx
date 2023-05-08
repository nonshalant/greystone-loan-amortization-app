import React, { useState } from 'react'
import axios from 'axios';

const CreateUser = ({ setUserCreated }) => {
    const [userName, setUserName] = useState('');
    const [userErrorMessage, setUserErrorMessage] = useState('');

    const handleChange = (e) =>{ 
        setUserName(e.target.value)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const body = JSON.stringify({username: userName})

        await axios({
            method: 'post',
            baseURL: 'https://lending-api.azurewebsites.net/users',
            data: body,
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(resp=>{
            setUserCreated(true);
        }).catch(error=>{
            setUserErrorMessage(error.response.data.detail);

            setTimeout(()=>{
                setUserErrorMessage('')
            },3000);
        });
        setUserName('');
    }

  return (
    <div className='user'>
        <div className="user-col">
            <form onSubmit={handleSubmit} className='user-form'>
                <div className='input-container'>
                    <label htmlFor="user">Enter your user name</label>
                    <input type="text" name="user" onChange={handleChange} value={userName} placeholder='Full Name' id="user" />
                </div>
                <p className='input-details'>(We use your name to save your loan details so you can view them later.)</p>
                <button className='submit-btn'>Create</button>
            </form>
            {
                userErrorMessage &&
                    <div className="error-message">
                        <p>{userErrorMessage}</p>
                    </div>
            }
        </div>
    </div>
  )
}

export default CreateUser