import { useState,useRef } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'
import Home from './components/Home/Home';
import music from './assets/music.mp3';

import WomanCollections from './Pages/WomanCollections/WomanCollections';
import MenCollections from './Pages/MenCollections/MenCollections';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';
import BrideGroom from './Pages/BrideGroom/BrideGroom';

function App() {
  const audioRef = useRef(null);
  return (
    <div>
      <audio autoPlay loop id="audio" src={music} type="audio/mp3"/>
      {/* <audio autoPlay loop id="audio">
        <source src={music} type="audio/mp3"/>
      </audio> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womancollections" element={<WomanCollections/>} />
          <Route path="/mencollections" element={<MenCollections/>} />
          <Route path="/aboutus" element={<About/>} />
          <Route path="/bridegroom" element={<BrideGroom/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
