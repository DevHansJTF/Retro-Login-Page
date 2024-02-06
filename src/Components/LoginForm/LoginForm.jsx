import React from 'react'
import './LoginForm.css';
import { FaUserCircle, FaLock } from "react-icons/fa";
import videoBg from '../Assets/videoBg.mp4'

export const LoginForm = () => {
  return (
      <>
      <div className="video-background">
        <video src={videoBg} autoPlay loop muted />
      </div>
    <div className='container'>
        <form action="">
            <h1>Welcome to Retro Hub</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaUserCircle className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                 <FaLock className='icon'/>
            </div>

            <div className="forgot-pass">
                <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
    </>
  )
}
