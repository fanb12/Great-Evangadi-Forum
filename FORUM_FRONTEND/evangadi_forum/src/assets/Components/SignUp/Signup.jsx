import classes from "./Signup.module.css";
function Signup() {
  return (
    <section>
      <div className={classes.signup_bg}>
        <div className={classes.form_container}>
          <div className={classes.signup_container}>
            {/* login section */}
            <form action="">
              <h2>Login into Your account</h2>
              <p>Don't have an account?</p>
              <span>
                <a href="#">Create a new account</a>
              </span>
              <input type="email" name="email" placeholder="Your email" />
              <input
                type="password"
                name="password"
                placeholder="Your password"
              />
              <button type="submit">Login</button>
            </form>
            <a>Create an Account?</a>
          </div>
        
        {/* evangadi networks */}
        <div className={classes.networks_container}>
            <a href="#">About</a>
            <h2>Evangadi Networks Q&A</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
              risus, molestie in risus nec, tincidunt consectetur nisl. <br/><br/>Sed
              dignissim sapien in auctor fringilla. Fusce ut purus mauris. Ut et
              tristique purus, nec hendrerit tellus. Praesent in dignissim ante.
              Fusce hendrerit augue sed facilisis cursusx, feugiat vel nisl ut,
              aliquam finibus massa.<br/><br/> Vivamus sodales lacus ut lacus mollis, sit
              amet vehicula eros malesuada. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum tincidunt erat.
            </p>
            <button>How it Works</button>
          </div>
      </div>
      </div>
    </section>
  );
}
export default Signup;
