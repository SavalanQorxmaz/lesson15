

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

const BASE_URL = `http://localhost:7000/`

const Register = () => {

  

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: '',
    id: Date.now()
  });





  const changeValue = (e)=>{
    setUser(prev => ({...prev, [e.target.name]:e.target.value}))
    setUser(prev => ({...prev, ['id']:Date.now()}))
  
  }
 

  const submitUser = () => {


    axios.post(BASE_URL, user).then(res=>console.log(res))

    const cleanValue = () => {
      const idArray = ['firstName', 'lastName', 'password']
      
      idArray.map(val => {document.getElementById(val).value = ''})
      
      }
   
    cleanValue()
      


  }


  return (
    <div className='register'>
      <div className='container'>
        <div className='form'>
          <div className='form-frame'>
            <h1>Sign UP</h1>
          <TextField onChange={changeValue}   id="firstName" label="Name" variant="outlined" name='firstName' />
          <TextField onChange={changeValue} id="lastName" label="SurName" variant="outlined" name='lastName'/>
          <TextField onChange={changeValue} id="password" label="Password" variant="outlined" name='password' type='password'/>
          <Button onClick={submitUser} disabled = {user.firstName.length < 3 || user.lastName.length < 3 || (user.password.search(/[A-Z]/)<0 || user.password.search(/[a-z]/) < 0 || user.password.search(/[0-9]/) < 0 || user.password.length < 5)} style = {{backgroundColor:'green'}} variant="contained" >Sign Up</Button>
      
         

          </div>
        </div>
      </div>
    </div>
  )
}


export  {Register}