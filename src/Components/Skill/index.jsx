import "./style.css"
import skills from "../../Datas/skills.json"
import {ThemeContext} from "../../App.js"
import formation from "../../Assets/formation.png"
import competence from "../../Assets/capacites.png"
import formationDark from "../../Assets/formation-dark.png"
import competenceDark from "../../Assets/capacites-dark.png"

function Skill() {                   /* Composant Compétences Ilias Dehaynin */ 
    return (
      <ThemeContext.Consumer>
      {({theme, toogleTheme}) => (
      <div id="skills" role="region">
        <h2 className="title">Compétences</h2>
        <div className="skills-display">
        <div className="skills-background">    
        <div className="skills-title">
          <h3>Formation</h3>
          {theme === "light" ?<img src={formationDark} alt="Formation icone" className="skills-icons" /> : <img src={formation} alt="Formation icone" className="skills-icons" /> }
        </div>
        <h4 className="skills-school">Lycée Phillipe de Girard - 2019</h4>
        <p className="skills-training">Bac sciences et technologies de l'industrie et du développement durable</p>
        <h4 className="skills-school">CERI - UNIVERSITÉ D'AVIGNON - 2021</h4>
        <p className="skills-training">L1 Informatique/Mathématique</p>
        <h4 className="skills-school">OPENCLASSROOMS - 2023</h4>
        <p className="skills-training">Intégrateur Web</p>
        </div>
        <div className="skills-background">
        <div className="skills-title">
          <h3>Languages</h3>
          {theme === "light" ?<img src={competenceDark} alt="Compétence icone" className="skills-icons" /> : <img src={competence} alt="Compétence icone" className="skills-icons" /> }
        </div>
        <div className="skill-table">
        {skills.map(skill => (
          <div className="skill" key={skill.id}>
            <img className="skill-picture" alt={skill.alt} src={skill.picture}></img>
            <h3 className="skill-title">{skill.title}</h3>
          </div>
        ))}
        </div>
        </div>
        </div>
      </div>
      )}
      </ThemeContext.Consumer>
    )
  }
  export default Skill;