import "./style.css"
import { Link } from 'react-router-dom'

const ProjectWork = ({link,id,imageSrc,imageAlt,title}) => (
  <Link to={link} >
  <div className={`Project`}>
      <img className="Project__cover" src={imageSrc} alt={imageAlt} />
      <h2 className="Project__title">{title}</h2>
  </div>
  </Link>
);

export default ProjectWork;