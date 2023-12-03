import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import { createContext, useState } from 'react';
import light from "./Assets/light.png"
import night from "./Assets/night.png"
import "./App.css"



export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")
  const toogleTheme = () => {
  setTheme((curr) => (curr === "dark" ? "light": "dark"))
}
  return (
    <div>
    <Router>
    <ThemeContext.Provider value={{theme, toogleTheme}}>
    <div className='App' id={theme}>
    {theme === "dark" ? <img src={night} alt='lampe' className='background-icon' onClick={() => toogleTheme()}/>  : <img src={light} alt='soleil' className='background-icon' onClick={() => toogleTheme()}/> }
    
    <Routes>
      <Route exact path="Portfolio/" element={<Home />} />           
    </Routes>
    </div>
    </ThemeContext.Provider>
    </Router>
   </div>
  )
}

export default App;