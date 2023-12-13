import "./style.css"
import photo from "../../Assets/Dehaynin.png"

function About() {                    /* Composant Description Ilias Dehaynin */
  return (
    <div id="about" role="main" >
      <h1>Dehaynin Ilias / Intégrateur Web</h1>
      <div className="about-background">
      <div className="display-about">
      <img src={photo} alt="Ilias Dehaynin" className="about-picture"/>
      <div>
        <p>Salut, je suis Ilias</p>
        <p>Je suis Intégrateur Web, basé en France</p>
        <p className="about-text">Travailleur et passioné par l'informatique<br/> je suis la personne qui vous faut pour développer vos idées<br/> en créant le site web qui vous correspond </p>
      </div>
      </div>
      </div>
    </div>
     
  )
}
export default About;