import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Keyquestion from './components/Keyquestion';
import Cards from './components/Cards';
import Carousal from './components/Carousal';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Background />
      <Keyquestion/>
      <Cards/>
      <Carousal/>
       <Footer/> 
    </>
  );
}

export default App;