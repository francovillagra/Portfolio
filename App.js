// src/App.js
import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Boostrap 
import Navbar from './Navbar';
import Presentation from './Presentation';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;