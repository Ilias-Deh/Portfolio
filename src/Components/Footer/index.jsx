import "./style.css"
import logogit from "../../Assets/github.png"
import logogitdark from "../../Assets/github-dark.png"
import logolink from "../../Assets/linkedin.png"
import {ThemeContext} from "../../App.js"

function Footer() {
  return (
    <ThemeContext.Consumer>
    {({theme, toogleTheme}) => (
    <div id="footer">
    <h2>Contact</h2>
    <ul >
      <div className="footer-display">
        <li>ilias.dehaynin@gmail.com</li>
        <li>0751691087</li>
      </div>
      <div className="footer-display">
        {theme === "light" ? <li><a href="https://github.com/Ilias-Deh"><img  src={logogitdark} className="footer-picture-git" alt="github"/></a></li> : <li><a href="https://github.com/Ilias-Deh"><img  src={logogit} className="footer-picture-git" alt="github"/></a></li>}
        <li><a href="https://www.linkedin.com/in/ilias-dehaynin-5ab057253/"><img src={logolink} className="footer-picture-linkedin" alt="linkedin"/></a></li>
      </div>
    </ul>
    </div>
    )}
    </ThemeContext.Consumer>
  )
}
export default Footer;