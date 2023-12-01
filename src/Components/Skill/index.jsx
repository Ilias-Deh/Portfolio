import "./style.css"
import skills from "../../Datas/skills.json"

function Skill() {
    return (
      <div className="skills">
        <h2 className="title">Compétences</h2>
        <div className="skills-display">
        <div>
        <h3>Formation</h3>
        <h4 className="skills-school">CERI - UNIVERSITÉ D'AVIGNON</h4>
        <p className="skills-training">L1 Informatique/Mathématique</p>
        <h4 className="skills-school">OPENCLASSROOMSM</h4>
        <p className="skills-training">Intégrateur Web</p>
        </div>
        <div>
        <h3>Languages</h3>
        <div className="skill-table">
        {skills.map(skill => (
          <div className="skill" key={skill.id}>
            <img className="skill-picture" alt={skill.title} src={skill.picture}></img>
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