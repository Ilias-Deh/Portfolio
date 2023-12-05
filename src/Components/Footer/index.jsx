import "./style.css"
import logogit from "../../Assets/github.png"
import logogitdark from "../../Assets/github-dark.png"
import logolink from "../../Assets/linkedin.png"
import {ThemeContext} from "../../App.js"

function Footer() {
  return (
    <ThemeContext.Consumer>
    {({theme, toogleTheme}) => (
    <div role="contentinfo" id="footer">
    <h2>Contact</h2>
    <ul className="footer-display" >
        <li>ilias.dehaynin@gmail.com</li>
        <li>0751691087</li>
    </ul>
      <ul className="footer-displaySec">
        {theme === "light" ? <li className="footer-margin"><a href="https://github.com/Ilias-Deh"><img  src={logogitdark} className="footer-picture-git" alt="github"/></a></li> : <li className="footer-margin"><a href="https://github.com/Ilias-Deh"><img  src={logogit} className="footer-picture-git" alt="github"/></a></li>}
        <li><a href="https://www.linkedin.com/in/ilias-dehaynin-5ab057253/"><img src={logolink} className="footer-picture-linkedin" alt="linkedin"/></a></li>
    </ul>
    </div>
    )}
    </ThemeContext.Consumer>
  )
}
export default Footer;