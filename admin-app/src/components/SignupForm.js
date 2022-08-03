import React, { useState } from 'react'

/**
* @author
* @function SignUpForm
**/

export const SignUpForm = (props) => {
  //using hooks for the attributes 
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit=e=>{
    e.preventDefault();
    alert(`registering new admin ${firstName} ${lastName}`);
  }

  return(
    <div className='form-container'>
      <form onSubmit={handleSubmit} className="form-main">
        <div style={{display:"flex"}}>
          <input  type="text" placeholder={"admin-first-name"} style={{width:'100%' ,margin:'0px'}} onChange={e=>setFirstName(e.target.value)} ></input>
          <input  type="text" placeholder={"admin-last-name"} style={{width:'100%' ,margin:'0px'}} onChange={e=>setLastName(e.target.value)} ></input>
        </div>
          <input  type="text" placeholder={"admin-email"} style={{width:'50%'}} onChange={e=>setEmail(e.target.value)} ></input>
          <input  type="password" placeholder={"admin-password"} style={{width:'50%'}} onChange={e=>setPassword(e.target.value)} ></input>
          <input  type="submit" value={"Register"} ></input>
          
      </form>
    </div>
   )

 }