

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { green } from '@mui/material/colors';

const Register = () => {

  

  const [user, setUser] = useState({
    firstname: '',
    surname: '',
    password: ''
  });





  const changeValue = (e)=>{
    setUser(prev => ({...prev, [e.target.name]:e.target.value}))
  
  }
 

  const submitUser = () => {
    const cleanValue = () => {
      const idArray = ['firstname', 'surname', 'password']
      
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
          <TextField onChange={changeValue}   id="firstname" label="Name" variant="outlined" name='firstname' />
          <TextField onChange={changeValue} id="surname" label="Surname" variant="outlined" name='surname'/>
          <TextField onChange={changeValue} id="password" label="Password" variant="outlined" name='password' type='password'/>
          <Button onClick={submitUser} disabled = {user.firstname.length < 3 || user.surname.length < 3 || (user.password.search(/[A-Z]/)<0 || user.password.search(/[a-z]/) < 0 || user.password.search(/[0-9]/) < 0 || user.password.length < 5)} style = {{backgroundColor:'red', color:'white'}} variant="contained" >Sign Up</Button>
      
         

          </div>
        </div>
      </div>
    </div>
  )
}


export  {Register}