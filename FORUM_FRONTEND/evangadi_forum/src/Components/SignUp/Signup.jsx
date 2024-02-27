import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Layout from "../Layout/Layout";
import { useState } from "react";
function Signup() {
  const [passwordvisible,setPasswordVisible] = useState(false)
  const [password,setPassword] = useState('')

  const togglePassword = () => {
    setPasswordVisible(!passwordvisible)
  }
  return (
    <section>
      <Layout>
        <div className={classes.signup_bg}>
          <div className={classes.form_container}>
            <div className={classes.signup_container}>
              {/* login section */}
              <form action="">
                <h2>Login into Your account</h2>
                <span>
                  <p>Don't have an account?</p>
                  <Link to="/Register">Create a new account</Link>
                </span>
                <input type="email" name="email" placeholder="Your email" />
                <div className={classes.password_container}>
                <input
                  type={passwordvisible?'text':'password'}
                  name="password"
                  value={password}
                  placeholder="Your password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <i onClick={togglePassword}>{passwordvisible? <FaRegEyeSlash/>:<FaRegEye/>}</i>
                </div>
                <Link to="#" className={classes.forgot}>
                  Forgot Password?
                </Link>
                {/* <FaRegEyeSlash />
							<FaRegEye /> */}
                <button type="submit">Login</button>

                <Link to="/Home">
                  <button type="submit">Login by Guess</button>
                </Link>
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
export default Signup;
