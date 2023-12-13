import "./style.css"

function Information() {   /* Composant Personnalité Ilias Dehaynin */ 
  return (
    <div className="Information">
      <div className="display-aboutSec">               
        <div className="display-informations">                     
        <h2>Centre d'intérets</h2>
        <ul>
          <li>Films</li>
          <li>Sport</li>                                                  
          <li>Jeux</li>
          <li>Musique</li>
          <li>Informatique</li>
        </ul>
        </div>
        <div className="display-informations">                    
        <h2>Qualités</h2>
        <ul>
          <li>Motivé</li>
          <li>Organisé</li>
          <li>Sociable</li>
          <li>Honnête</li>
          <li>Autonome</li>
        </ul>
        </div>
        </div>
      </div>
  )
}
export default Information;