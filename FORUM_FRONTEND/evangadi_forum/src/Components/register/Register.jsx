import React, { useState, useRef } from "react";
import classes from "./register.module.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import axios from "../../axiosConfig";
function Register() {
  const navigate = useNavigate();
  const [passwordvisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const userNameDom = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const useremail = useRef();
  const userpassword = useRef();
  // password toggler
  const togglePassword = () => {
    setPasswordVisible(!passwordvisible);
  };
  async function HandleSubmit(e) {
    e.preventDefault();
    const usernamevalue = userNameDom.current.value;
    const firstnamevalue = firstName.current.value;
    const lastnamevalue = lastName.current.value;
    const emailvalue = useremail.current.value;
    const passwordvalue = userpassword.current.value;
    if (
      !usernamevalue ||
      !firstnamevalue ||
      !lastnamevalue ||
      !emailvalue ||
      !passwordvalue
    ) {
      alert("please provide all required information");
      return;
    }
    try {
      await axios.post("/users/register", {
        username: usernamevalue,
        firstname: firstnamevalue,
        lastname: lastnamevalue,
        email: emailvalue,
        password: passwordvalue,
      });
      alert("register succesfull. please login");
      navigate("/SignUp");
    } catch (error) {
      console.log(error.response);
      alert("some thing wrong");
    }
  }


  return (
    <section>
      <Layout>
        <div className={classes.signup_bg}>
          <div className={classes.form_container}>
            <div className={classes.signup_container}>
              {/* login section */}
              <form onSubmit={HandleSubmit}>
                <h2>Join the network</h2>
                <span>
                  <p>Already have an account?</p>
                  <Link to="/SignUp">Sign in</Link>
                </span>
                <input
                  className={classes.email}
                  ref={userNameDom}
                  type="username"
                  name="Username"
                  placeholder="User Name"
                />
                <div className={classes.name_input}>
                  <input
                    className={classes.name}
                    type="fname"
                    name="fname"
                    ref={firstName}
                    placeholder="First Name"
                  />
                  <input
                    className={classes.name}
                    ref={lastName}
                    type="lname"
                    name="lname"
                    placeholder="Last Name"
                  />
                </div>
                <input
                  className={classes.email}
                  ref={useremail}
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
                <div className={classes.password_container}>
                  <input
                    ref={userpassword}
                    type={passwordvisible ? "text" : "password"}
                    name="password"
                    value={password}
                    placeholder="Your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i onClick={togglePassword}>
                    {passwordvisible ? <FaRegEye /> : <FaRegEyeSlash />}
                  </i>
                </div>
                {/* <FaRegEyeSlash />
							<FaRegEye /> */}
                <span className={classes.privacy}>
                  <p>
                    I agree to the <a href="">privacy policy </a>and
                    <a href="">terms of service.</a>
                  </p>
                </span>
                <button type="submit">Agree and Join</button>

                <br />
                <Link to="/SignUp">Already have an account?</Link>
              </form>
            </div>

            {/* evangadi networks */}
            <div className={classes.networks_container}>
              <Link to="#">About</Link>
              <h1>Evangadi Networks Q&A</h1>
              <p>
                No matter what stage of life you are in, whether you’re just
                starting elementary school or being promoted to CEO of a Fortune
                500 company, you have much to offer to those who are trying to
                follow in your footsteps.
              </p>
              <p>
                wheather you are willing to share your knowledge or you are just
                looking to meet mentors of your own, please start by joining the
                network here.
              </p>
              <Link to="/Register">
                <button className={classes.orange}>
                  CREATE A NEW ACCOUNT{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default Register;
