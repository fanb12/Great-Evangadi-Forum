import React from 'react'
import classes from "./register.module.css";
import axios from '../axiosConfig'
import { useRef } from 'react';
import {useNavigate,Link} from 'react-router-dom'
function Regiter() {
  const navigat=useNavigate()
  const usreNameDom=useRef()
  const firstNameDom=useRef()
  const lastNameDom=useRef()
  const emailNameDom=useRef()
  const passNameDom=useRef()

  async function handleSubmit(e){
    e.preventDefault()
    const usreNameValue=usreNameDom.current.value;
    const firstNameValue=firstNameDom.current.value;
    const lastNameValue=lastNameDom.current.value;
    const emailValue=emailNameDom.current.value;
    const passvalue=passNameDom.current.value;

    try {
      await axios.post('/users/register/',{
        username:usreNameValue,
        firstname:firstNameValue,
        lastname:lastNameValue,
        email:emailValue,
        password:passvalue,
      })
      alert( `${usreNameValue} Registerd` )
      navigat("/login")
    } catch (error) {
      console.log(error)
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
               <input ref={usreNameDom} type="text" placeholder='user name'/>
                
                <input
                  ref={firstNameDom}
                  type="fname"
                  name="fname"
                  placeholder="First Name"
                />
                <input
                  ref={lastNameDom}
                  type="lname"
                  name="lname"
                  placeholder="Last Name"
                />
                <input ref={emailNameDom} type="email" name="email" placeholder="Your email" />
                <input
                  ref={passNameDom}
                  type="password"
                  name="password"
                  placeholder="Your password"
                />
                {/* <FaRegEyeSlash />
							<FaRegEye /> */}
                <span className={classes.privacy}>
                  <p>
                    I agree to the <a href="">privacy policy </a>and
                    <a href="">terms of service.</a>
                  </p>
                </span>
                <button type='submit' >Agree and Join</button>

                <br />
                 <a href="">Already have an account?</a> 
              </form>
            </div>

            <Link to={'/login'}>Log in</Link>
          </div>
        </div>
    
    </section>

    </div>
  )
}

export default Regiter