import React, {useState, useEffect} from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer';


function App() {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(true);
  
  useEffect(() => {
    Aos.init({
      offset: 200, 
      delay: 0, 
      duration: 1500, 
      easing: "ease", 
      once: true, 
    });

    return () => {
      Aos.refresh();
    };
  }, []);


  useEffect(() => {
    if (theme === false) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} setTheme = {setTheme} menu = {menu} setMenu = {setMenu} />
      <Routes>
        <Route path='/' element = {<Home theme={theme} />} />
        <Route path='/about' element = {<About theme={theme} />} />
        <Route path='/service' element = {<Services theme={theme}  />} />
        <Route path='/skill' element = {<Skills theme={theme} />} />
        <Route path='/project' element = {<Projects theme={theme} />} />
      </Routes>
      <Footer  theme={theme} />
    </div>
  )
}

export default App
