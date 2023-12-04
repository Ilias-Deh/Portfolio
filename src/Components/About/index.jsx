import "./style.css"
import photo from "../../Assets/Dehaynin.png"

function About() {
  return (
    <div id="about">
      <h1>Dehaynin Ilias / Intégrateur Web</h1>
      <div className="display-about">
      <img src={photo} alt="Ilias Dehaynin" className="about-picture"/>
      <div>
        <p>Salut, je suis Ilias</p>
        <p>Je suis Intégrateur Web, basé en France</p>
        <p className="about-text">Travailleur et passioné par l'informatique<br/> je suis la personne qui vous faut pour développer vos idées en créant le site web qui vous correspond </p>
      </div>
      </div>
      <div className="display-aboutSec">
        <div className="display-informations">
        <h3>Centre d'intérets</h3>
        <ul>
          <li>Films</li>
          <li>Sport</li>
          <li>Jeux</li>
          <li>Musique</li>
          <li>Informatique</li>
        </ul>
        </div>
        <div className="display-informations">
        <h3>Qualités</h3>
        <ul>
          <li>Motivé</li>
          <li>Organisé</li>
          <li>Sociable</li>
          <li>Autonome</li>
        </ul>
        </div>
      </div>
    </div>
     
  )
}
export default About;