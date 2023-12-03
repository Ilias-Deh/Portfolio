import "./style.css"

function Header() {


  return (
    <div className="header">
      <nav className="header-nav">
        <ul>
          <a href="#about">
              <li>À propos de moi</li>
          </a>
          <a href="#skills">
              <li>Compétences</li>
          </a>
          <a href="#slider">
              <li>Projets</li>
          </a> 
          <a href="#footer">
          <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  )
}
export default Header;