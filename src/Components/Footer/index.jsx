import "./style.css"
import logogit from "../../Assets/github.png"
import logolink from "../../Assets/linkedin.png"

function Footer() {
  return (
    <div className="footer">
    <h2>Contact</h2>
    <ul >
      <div className="footer-display">
        <li>ilias.dehaynin@gmail.com</li>
        <li>0751691087</li>
      </div>
      <div className="footer-display">
        <li><img src={logogit} alt="github"/></li>
        <li><img src={logolink} alt="linkedin"/></li>
      </div>

    </ul>
    </div>
  )
}
export default Footer;