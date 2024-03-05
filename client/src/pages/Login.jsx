import React from 'react'
import classes from "./register.module.css";
import axios from '../axiosConfig'
import { useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom'
function Login() {
  const navigat=useNavigate()
  const emailNameDom=useRef()
  const passNameDom=useRef()

  async function handleSubmit(e){
    e.preventDefault()
    const emailValue=emailNameDom.current.value;
    const passvalue=passNameDom.current.value;
    if (!emailValue || !passvalue){
      alert("Fill all required information")
    }
    try {
     const {data}= await axios.post('/users/login/',{
        email:emailValue,
        password:passvalue,
      })
      alert( `Log In successfully` )
      localStorage.setItem('token',data.token)
      localStorage.setItem('name',data.usernam)
      navigat("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  return (
    <div>
<section>
        <div className={classes.signup_bg}>
          <div className={classes.form_container}>
            <div className={classes.signup_container}>
              {/* login section */}
              <form action="" onSubmit={handleSubmit}>
                <h2>Join the network</h2>  
                <input ref={emailNameDom} type="email" name="email" placeholder="Your email" />
                <input
                  ref={passNameDom}
                  type="password"
                  name="password"
                  placeholder="Your password"
                />
                {/* <FaRegEyeSlash />
							<FaRegEye /> */}
                <button type='submit' >Log In</button> 
                <Link to={'/register'}>Go to Register page</Link>
              </form>
              
            </div>
             
          </div>
        </div>
    
    </section>

    </div>
  )
}

export default Login