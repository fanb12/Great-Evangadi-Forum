import classes from "./Signup.module.css";
import { FaRegEyeSlash  , FaRegEye } from "react-icons/fa";
function Signup() {
	return (
		<section>
			<div className={classes.signup_bg}>
				<div className={classes.form_container}>
					<div className={classes.signup_container}>
						{/* login section */}
						<form action="">
							<h2>Login into Your account</h2>
							<span>
								<p>Don't have an account?</p>
								<a href="#">Create a new account</a>
							</span>
							<input type="email" name="email" placeholder="Your email" />
							<input
								type="password"
								name="password"
								placeholder="Your password"
							/>
							{/* <FaRegEyeSlash />
							<FaRegEye /> */}
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
							follow in your footsteps.{" "}
							<p>
								wheather you are willing to share your knowledge or you are just
								looking to meet mentors of your own, please start by joining the
								network here.
							</p>
						</p>
						<button className={classes.orange}>CREATE A NEW ACCOUNT </button>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Signup;
