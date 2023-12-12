import "./style.css"
import projects from "../../Datas/projects.json"
import { useState, useEffect } from "react";
import arrow_right from "../../Assets/arrow_right.png"
import arrow_left from "../../Assets/arrow_left.png"

function Slider() { /* Composant Carrousel Ilias Dehaynin */ 

    const [indexSlide, setIndexSlide] = useState(0)

    const nextCard = () => {
            setIndexSlide(indexSlide === projects.length -1 ? 0 :  indexSlide + 1);             {/* Fonction Changement de Slide */}
    }                                                                                               
    
    const previousCard = () => {
            setIndexSlide(indexSlide === 0 ? projects.length -1 : indexSlide -1);
    }

    const autoScroll = false;
    let slideInterval;
    let intervalTime = 5000;                                
    function auto() {
        slideInterval = setInterval(nextCard, intervalTime)                                   
    }
                                                                                                
     useEffect(() => {
        if(autoScroll) {                                                                        {/* Fonction Scroll automatique Slide */}
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [indexSlide]);

    return (
        <div className="slider" role="region">
            <img src={arrow_left} alt="arrow left" className="arrow_left" onClick={previousCard}/>
            <img src={arrow_right} alt="arrow right" className="arrow_right" onClick={nextCard} />
            {projects.map((project, index) => {
                return (
                    <div className={index === indexSlide ? "slide" : "otherSlide" } key={project.id}>         
                     {index === indexSlide && (
                        <>                                                                                                  {/* Slide */}
                        <a href={project.link}>
                        <img className="slider-picture"  alt={project.alt} src={project.picture} />
                        <div>
                            <h3 className="slider-title">{project.title}</h3>
                            <p className="slider-description">{project.description}</p>
                            <ul className="slider-tools">
                            {project.tools.map((tool) => (
                                  <li key={index+tool} className='slider-tool'>{tool}</li>
                                ))}
                            </ul>
                        </div>
                        </a>
                        </>
                     )}          
                    </div>
                )
            })}
      </div>
    )
}
export default Slider;