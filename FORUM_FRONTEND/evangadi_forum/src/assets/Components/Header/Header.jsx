import classes from "./Header.module.css"
import evangadi_logo from "../../images/evangadi.png"
function Header() {
  return (
		<section className={classes.header_container}>
			<div className={classes.logo}>
				<a href="#">
					<img src={evangadi_logo} alt="evangadi_logo"></img>
				</a>
			</div>
			<div className={classes.header_links}>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Header
