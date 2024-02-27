import React, { useState } from "react";
import classes from "./register.module.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
function Register() {
  const [passwordvisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setPasswordVisible(!passwordvisible);
  };
  return (
    <section>
      <Layout>
        <div className={classes.signup_bg}>
          <div className={classes.form_container}>
            <div className={classes.signup_container}>
              {/* login section */}
              <form action="">
                <h2>Join the network</h2>
                <span>
                  <p>Already have an account?</p>
                  <Link to="/SignUp">Sign in</Link>
                </span>
                <input
                  className={classes.email}
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
                <input
                  className={classes.name}
                  type="fname"
                  name="fname"
                  placeholder="First Name"
                />
                <input
                  className={classes.name}
                  type="lname"
                  name="lname"
                  placeholder="Last Name"
                />
                <div className={classes.password_container}>
                  <input
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