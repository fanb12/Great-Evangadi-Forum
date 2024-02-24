import classes from "./Header.module.css"
import evangadi_logo from "../../images/evangadi.png"
function Header() {
  return (
    <section className={classes.header_container}>
        <div>
            <a href="#"><img src={evangadi_logo} alt="evangadi_logo"></img></a>
        </div>
        <div className={classes.header_links}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">How it Works</a></li>
                <li className={classes.header_signin}><a href="#">Sign In</a></li>
            </ul>
        </div>
        <button className={classes.hamburger_menu}>&#9776;</button>
    </section>
  )
}

export default Header
