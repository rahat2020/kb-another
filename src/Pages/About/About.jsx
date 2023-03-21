import React from 'react';
import './About.css';
import khaneone from '../../assets/khan1.jpg';
import khantwo from '../../assets/khan2.jpg';

const About = () => {
  return (
    <div className="abouts">
      <div className="container">
        <div className="abtBox">
          <p className="abtsubtitle">Story of Khan Brothers</p>
          <h2 className='abttitle'>Khan Brother's A Renowned Brand</h2>
          <div className="halfpara_container">
            <p className='halfpara'>In 2011, <b style={{fontWeight:'bolder'}}>Karishma Khan, the granddaughter of Haji Shamsuddin Khan,</b> took over the business and revitalized it with fresh ideas and modern approach. Despite the challenges, Khan Brothers thrives and continues to provide a wide range of collections, including wedding, bridal, men's, and day to day wear.</p>
          </div>
          <div className="abtOwnerimg_container">
            <div className="abtimgCon">
              <img src={khaneone} alt="" className="imgs" />
              <img src={khantwo} alt="" className="imgs" />
            </div>
          </div>
          <div className="fullpara_container">
            <p className='fullpara'>Khan Brothers is a renowned fashion brand that has been adding a touch of splendor to people's lives for over seven decades. The story of Khan Brothers began in 1952 when Haji Shamsuddin Khan, a young man driven by the sense of endless possibilities and dreams of grandeur, launched the business. He opened his first showroom in New Market, and his legacy was passed on to his son, Nasiruddin Khan Shamim, who successfully expanded the business by opening branches in several prime locations across the city.
            </p>
            <p className='fullpara'>Khan Brothers was the first to showcase both traditional and avant-garde fashion wear of the South Asian subcontinent in Bangladesh. Their timeless wedding collections have been a part of countless new beginnings, adding elegance and grace to each bride's special day. Khan Brothers quickly became a household name in the fashion industry.</p>

            <p className='fullpara'>At Khan Brothers, we promise an utmost experience of luxury, sophistication, and unparalleled services. Our team is committed to delivering personalized shopping experiences that cater to our clients' unique styles and preferences. Our mission is to continue innovating and evolving while staying true to our rich heritage and traditions.</p>

            <p className='fullpara'>Khan Brothers is a legacy of rich traditions, timeless elegance, and impeccable craftsmanship. We take pride in our heritage and strive to provide our clients with the finest fashion experience.</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About