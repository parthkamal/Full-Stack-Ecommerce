import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpForm } from '../components/SignupForm'

/**
* @author
* @function Signup
**/

export const Signup = (props) => {
  return(
    <>
    <Header/>
    <SignUpForm/>
    <Footer/>
    </>
   )

 }