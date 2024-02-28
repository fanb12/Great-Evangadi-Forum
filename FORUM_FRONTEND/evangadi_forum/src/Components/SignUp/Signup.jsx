import { Link, useNavigate } from "react-router-dom";
import classes from "./Signup.module.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Layout from "../Layout/Layout";
import React, { useState, useRef } from "react";
import axios from "../../axiosConfig";

function Signup() {
  const navigate = useNavigate();
  const useremail = useRef();
  const userpassword = useRef();
  const [passwordvisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setPasswordVisible(!passwordvisible);
  };
  async function HandleSubmit(e) {
    e.preventDefault();
    const emailvalue = useremail.current.value;
    const passwordvalue = userpassword.current.value;
    if (!emailvalue) {
      useremail.current.style.border = "1px solid red";
      return;
    } else if (!passwordvalue) {
      userpassword.current.style.border = "1px solid red";
      useremail.current.style.border = "1px solid gray";
      return;
    }
    try {
      await axios.post("/users/login", {
        email: emailvalue,
        password: passwordvalue,
      });
      alert("login succesfull. please Home");
      navigate("/Home");
    } catch (error) {
      console.log(error?.response?.data);
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
                <h2>Login into Your account</h2>
                <span>
                  <p>Don't have an account?</p>
                  <Link to="/Register">Create a new account</Link>
                </span>
                <div className={classes.email}>
                  <input
                    ref={useremail}
                    type="email"
                    name="email"
                    placeholder="Your email"
                  />
                </div>
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
                <Link to="#" className={classes.forgot}>
                  Forgot Password?
                </Link>
                <button type="submit">Login</button>
              </form>
            </div>

            {/* evangadi networks */}
            <div className={classes.networks_container}>
              <a href="#">About</a>
              <h1>Evangadi Networks Q&A</h1>
              <p>
                No matter what stage of life you are in, whether you’re just
                starting elementary school or being promoted to CEO of a Fortune
                500 company, you have much to offer to those who are trying to
                follow in your footsteps.
              </p>
              <p>
                Whether you are willing to share your knowledge or you are just
                looking to meet mentors of your own, please start by joining the
                network here.
              </p>
              <Link to="/Register">
                <button className={classes.orange}>CREATE A NEW ACCOUNT</button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default Signup;
