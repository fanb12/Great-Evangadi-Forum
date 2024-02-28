import classes from "./Header.module.css";
import evangadi_logo from "../../images/evangadi.png";
import { Link } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
import { useState } from "react";
function Header() {
  const [sidebar,setSidebar] = useState(false)
  const [isSidebarOpen,setSidebarOpened] = useState(false)

  const sidebar_displayer = () => {
    setSidebar(!sidebar)
  }
  const background_toggler = () => {
    setSidebarOpened(!isSidebarOpen)
      document.body.classList.toggle(classes.body_color)
  }
  const bothHandler = () => {
    sidebar_displayer(),
    background_toggler()
  }

  return (
    <>
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
      <div onClick={bothHandler} className={classes.hamburger}>
          <a href="#" className={classes.hamburger_link}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
    </section>
    {sidebar && isSidebarOpen && <section className={`${classes.side_bar}`}>
      {/*  */}
          <div>
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">privacy</a></li>
              <li><a href="#">terms</a></li>
            </ul>
          </div>
    </section>}
    </>
  );
}

export default Header;
