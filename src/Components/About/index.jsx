import "./style.css"
import photo from "../../Assets/Dehaynin-bg.png"

function About() {
  return (
    <div id="about">
      <p>Dehaynin Ilias / Intégrateur Web</p>
      <img src={photo} alt="Ilias Dehaynin" className="about-picture"/>
      <p>Salut, je suis Ilias</p>
      <p>Je suis Intégrateur Web, basé en France</p>
      <p className="about-text">Travailleur et passioné par l'informatique<br/> je suis la personne qui vous faut pour développer vos idées en créant le site web qui vous correspond </p>
    </div>
  )
}
export default About;