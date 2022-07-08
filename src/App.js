import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router ,Routes ,Route } from 'react-router-dom';
import Header  from './Header/Header';
import Homepage from './Header/HomePage/HomePage';

import ProjectC from './Project/ProjectC';
import Skill from './Skill/Skill';
//import Contact from './Header/HomePage/Conatact/Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path ="/Project" element={<ProjectC/> } />  
          <Route path="/Skill"  element ={<Skill/>} />  
                
        </Routes>
      </BrowserRouter>      
    </div>
  );
}
{/* <Route path = "/#Contact" element={<Contact />} /> */}
//<Route path ="/Project" element={<Project/>} />
export default App;
