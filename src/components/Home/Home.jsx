import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import LuxaryDress from '../LuxaryDress/LuxaryDress'
import OurMission from '../OurMission/OurMission'
import Quotes from '../Quotes/Quotes'
import SpeacialDresses from '../SpeacialDresses/SpeacialDresses';
import './Home.css';

const Home = () => {
  return (
    <div className="homeMain">
        <Header/>
        <SpeacialDresses/>
        <LuxaryDress/>
        <Quotes/>
        <OurMission/>
    </div>
  )
}

export default Home