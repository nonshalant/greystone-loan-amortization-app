import React, { useState } from 'react'
import './createUser.css'
import axios from 'axios';

const CreateUser = () => {
    const [userName, setUserName] = useState('');

    const handleChange = (e) =>{ 
        setUserName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const body = JSON.stringify({username: userName})

        axios({
            method: 'post',
            baseURL: 'https://lending-api.azurewebsites.net/users',
            data: body,
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(resp=>{
            console.log(resp)
            setUserName('')
        })
    }

  return (
    <div className='user'>
        <div className="user-col-left">
            <h2>Create your account</h2>
            <form onSubmit={handleSubmit} className='user-form'>
                <div className='input-container'>
                    <label htmlFor="user">Enter your user name</label>
                    <input type="text" name="user" onChange={handleChange} value={userName} id="user" />
                </div>
                <button>Create</button>
            </form>
        </div>
        <div className="user-col-right">
            <img className='user-image' src="  https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="a piggy bank with some coins spread out in front of it. He also has a covid mask on, with candles lit in the back." />
        </div>
    </div>
  )
}

export default CreateUser