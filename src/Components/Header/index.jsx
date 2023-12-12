import "./style.css"

function Header() {   /* Composant menu Ilias Dehaynin */ 
  return (
    <div className="header">
      <nav role="navigation" className="header-nav">
        <ul>
              <li><a href="#about">À propos de moi</a></li>     
              <li><a href="#skills">Compétences</a></li>     
              <li><a href="#slider">Projets</a></li>  
              <li><a href="#footer">Contact</a></li>    
        </ul>
      </nav>
    </div>
  )
}
export default Header;