import React, { useTransition } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth.action';


/**
* @author
* @function SigninForm
**/

export const SigninForm = (props) => {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const dispatch=useDispatch();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    //creating the user
    const user ={email,password}
    console.log("submit event is fired")
    //dispatching the actions of login request
    dispatch(login(user));
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className="form-main" >
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)} placeholder="admin-email"  /> 
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="admin-password"/>
          <input type="submit" value="Signin" />
      </form>
    </div>
  )

}