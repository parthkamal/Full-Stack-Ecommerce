import React, { useTransition } from 'react'
import { useState } from 'react'

/**
* @author
* @function SigninForm
**/

export const SigninForm = (props) => {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`logging in....${email}`);
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