import classes from "./footer.module.css"
import footerLogo from "../../images/footlogo.png"
import facebook from "../../images/pngwing.com.png"
import tiktok from "../../images/tiktok.png"
import instagram from "../../images/instagram.png"
import telegram from "../../images/telegram.png"
function Footer() {
  return (
    <section className={classes.footer_container}>
        <div>
            <a href="#"><img  className={classes.eva_logo} src={footerLogo}></img></a>
            <div className={classes.footer_links}>
                <a href="#"><img src={facebook}></img></a>
                <a href="#"><img src={tiktok}></img></a>
                <a href="#"><img src={instagram}></img></a>
                <a href="#"><img src={telegram}></img></a>
            </div>
        </div>
        <div>
            <h1>Useful Links</h1>
            <ul>
                <li><a>How it works</a></li>
                <li><a>Terms of service</a></li>
                <li><a>Privacy Policy</a></li>
            </ul>
        </div>
        <div>
            <h1>Contact Info</h1>
            <ul>
                <li>Evangadi Networks</li>
                <li>support@evangadi.com</li>
                <li>+1-202-386-2702</li>
            </ul>
        </div>
    </section>
  )
}

export default Footer
