import "./style.css"
import projects from "../../Datas/projects.json"
import { useState } from "react";
import arrow_right from "../../Assets/arrow_right.png"
import arrow_left from "../../Assets/arrow_left.png"

function Slider() {

    const [indexSlide, setIndexSlide] = useState(0)

    const nextCard = () => {
            setIndexSlide(indexSlide === projects.length -1 ? 0 :  indexSlide + 1);
    }
    
    const previousCard = () => {
            setIndexSlide(indexSlide === 0 ? projects.length -1 : indexSlide -1);
    }

    return (
        <div className="slider">
            <img src={arrow_left} alt="arrow left" className="arrow_left" onClick={previousCard}/>
            <img src={arrow_right} alt="arrow right" className="arrow_right" onClick={nextCard} />
            {projects.map((project, index) => {
                return (
                    <div className={index === indexSlide ? "slide" : "otherSlide" } key={project.id}>
                     {index === indexSlide && (
                        <>
                        <a href={project.link}>
                        <img className="slider-picture"  alt={project.title} src={project.picture} />
                        <div>
                            <h3 className="slider-title">{project.title}</h3>
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





/* const nextCard = () => {
    if(byDateDesc) {
    setTimeout(
      () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
      5000
    );}
  };
  useEffect(() => {
    nextCard();
  }); */