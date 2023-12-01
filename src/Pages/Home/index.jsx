import Header from "../../Components/Header";
import About from "../../Components/About";
import Skill from "../../Components/Skill";
import Footer from "../../Components/Footer";
import ProjectWork from "../../Components/ProjectWork";
import projects from "../../Datas/projects.json"
import "./style.css"

function Home() {
  return (
    <>
    <div className="background" />
    <Header />
   <About />
   <Skill />
   <h2 className="title">Projets</h2>
   <div className="projects">
   {projects.map(project => (
      <ProjectWork key={project.id}
            link={project.link}
            title={project.title}
            imageSrc={project.picture}
            imageAlt={project.title}
          />
    ))}
   </div>
   <Footer />
   <div className="background" />
    </>
  )
}
export default Home;