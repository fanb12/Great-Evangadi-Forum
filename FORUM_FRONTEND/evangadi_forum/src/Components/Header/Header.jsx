import classes from "./Header.module.css";
import evangadi_logo from "../../images/evangadi.png";
import { Link } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <section className={classes.header_container}>
      <div className={classes.logo}>
        <Link to="/Home">
          <img src={evangadi_logo} alt="evangadi_logo"></img>
        </Link>
      </div>
      <div className={classes.header_links}>
        <ul>
          <li style={{ marginTop: "10px" }}>
            <Link href="/Home">Home</Link>
          </li>
          {/* <li style={{ marginLeft: "10px", color: "rgb(53,126,232)" }}>
            <CgProfile size={50} />
          </li> */}
        </ul>
      </div>
      <div className={classes.hamburger}>
          <a href="#" className={classes.hamburger_link}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
    </section>
  );
}

export default Header;
