import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {

  return (
    <BrowserRouter>
      <Background/>
      <div className="App">
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path = "/projects" element = {<Projects/>}/>
          <Route path = "/skills" element = {<Skills/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;