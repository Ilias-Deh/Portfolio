import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Project from './Pages/Project';
import ProjectSec from './Pages/ProjectSec';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'hind', sans-serif;    
    }

    body {
        margin :0px;
        background-color:#1E1E1E;
    }
    h2 {
      font-size:40px;
    }
    h3 {
      font-size:36px;
      text-align:center;
    }

`

function App() {
  return (
    <div>
    <Router>
    <GlobalStyle />
    <Routes>
      <Route exact path="Portfolio/" element={<Home />} />
      <Route path="Portfolio/project" element={<Project />} />
      <Route path="Portfolio/projectSec" element={<ProjectSec />} />            
    </Routes>
    </Router>
   </div>
  )
}

export default App;