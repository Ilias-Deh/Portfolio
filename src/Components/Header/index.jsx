import "./style.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <nav className="header-nav">
        <ul>
          <Link to="/">
              <li>À propos de moi</li>
          </Link>
          <Link to="/project">
              <li>Compétences</li>
          </Link>
          <Link to="/projectSec" >
              <li>Projets</li>
          </Link> 
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}
export default Header;