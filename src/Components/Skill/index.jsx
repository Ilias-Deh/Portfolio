import "./style.css"
import skills from "../../Datas/skills.json"

function Skill() {
    return (
      <div id="skills" role="region">
        <h2 className="title">Compétences</h2>
        <div className="skills-display">
        <div className="skills-background">
        <h3>Formation</h3>
        <h4 className="skills-school">Lycée Phillipe de Girard</h4>
        <p className="skills-training">Bac sciences et technologies de l'industrie et du développement durable</p>
        <h4 className="skills-school">CERI - UNIVERSITÉ D'AVIGNON</h4>
        <p className="skills-training">L1 Informatique/Mathématique</p>
        <h4 className="skills-school">OPENCLASSROOMSM</h4>
        <p className="skills-training">Intégrateur Web</p>
        </div>
        <div className="skills-background">
        <h3>Languages</h3>
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
    )
  }
  export default Skill;