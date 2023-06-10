import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skill';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Projects from './Components/Projects';

function App() {
  return (
    
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} component={Home} exact></Route>
        <Route path="/about" element={<About/>} component={About} exact></Route>
        <Route path="/experience" element={<Experience/>} component={Experience} exact></Route>
        <Route path="/skills" element={<Skills/>} component={Skills} exact></Route>
        <Route path="/contact" element={<Contact/>} component={Contact} exact></Route>
        <Route path="/projects" element={<Projects/>} component={Projects} exact></Route>
      </Routes>


      <Footer/>
    </Router>
  

  
  );
}

export default App;



