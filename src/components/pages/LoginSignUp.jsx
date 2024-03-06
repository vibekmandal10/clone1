import React, { useState } from 'react'
import './LoginSignUp.css'
const LoginSignUp = () => {
     const [isActive, setIsActive] = useState(true);

     const handleActive = () =>{
        setIsActive(true)
     }
     const handleActiveFalse = () =>{
        setIsActive(false)
     }

     const SignUp = () =>{
        return <>
        <div className='form-container'>
            <h1>Registration Form</h1>
            <div className='login-signUpButtons'>
                <button className={isActive ? 'btn btn-active': 'btn'} onClick={handleActive}>Login</button>
                <button className={isActive ? 'btn ': 'btn btn-active'}  onClick={handleActiveFalse}>Sign Up</button>
            </div>
        <form action="" className='login-form'>
            
            <input type="email" placeholder='Enter Your Email' />
            <input type="text" placeholder='Name' />
            <input type="number" placeholder='Mobile' />
            
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            
            <button className='btn'>Sign Up</button>
        </form>
        
        </div>
        </>
     }

     const Login = () =>{
        return <>
         <div className='form-container'>
            <h1>Login Form</h1>
            <div className='login-signUpButtons'>
                <button className={isActive ? 'btn btn-active': 'btn'} onClick={handleActive}>Login</button>
                <button className={isActive ? 'btn ': 'btn btn-active'}  onClick={handleActiveFalse}>Sign Up</button>
            </div>
        <form action="" className='login-form'>
            
            <input type="email" placeholder='Enter Your Email' />
            
            <input type="password" placeholder='password' />
            <a href="">Forgot Password</a>
            <button className='btn'>Sign In</button>
        </form>
        <div className='notMember'>
            <p>Not a member? <span><a  onClick={handleActiveFalse}>Sign Up Now</a></span></p>
        </div>
        </div>
        </>
     }

  return (
    <div className='loginPage' >
       
        {!isActive ? <SignUp />: <Login />}
        
        
    </div>
  )
}

export default LoginSignUp