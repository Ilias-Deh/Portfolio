import Header from "../../Components/Header";
import About from "../../Components/About";
import Skill from "../../Components/Skill";
import Slider from "../../Components/Slider";
import Footer from "../../Components/Footer";
import "./style.css"

function Home() {
  return (
    <>
    <div className="background" />
    <Header />
   <About />
   <Skill />
   <h2 id="slider">Projets</h2>
   <Slider />
   <Footer />
   <div className="background" />
    </>
  )
}
export default Home;