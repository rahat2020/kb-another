import React from 'react';
import './WomanCollections.css';
import one from '../../assets/slideone.jpg';
import two from '../../assets/slidetwo.jpg';
import wmnone from '../../assets/1.jpg';
import wmntwo from '../../assets/2.jpg';
import wmnthree from '../../assets/3.jpg';
import wmnfour from '../../assets/4.jpg';
import wmnfive from '../../assets/5.jpg';
import wmnsix from '../../assets/6.jpg';


const WomanCollections = () => {
  return (
    <div className="wmncollections">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active caru">
            <img src={one} className="d-block w-100 slide" alt="..." />
            <div className="carutextbox">
              <h3 className='cartext'>Welcome to</h3>
              <h2 className="carutitle">khan brother's bridal</h2>
            </div>
          </div>
          <div className="carousel-item active caru">
            <div className="carousel-item">
              <img src={two} className="d-block w-100 slide" alt="..." />
              <div className="carutextbox">
                <h3 className='cartext'>Welcome to</h3>
                <h2 className="carutitle">khan brother's bridal</h2>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="wmncards">
          <h5 className='wmntext'>the process</h5>
          <h3 className='wmntitle'>get started</h3>

          <div className="wmn">
            <div className="wmnimage_container">
              <div className="imgwithtextbox">
                <img src={wmnone} alt="" className="wmnimg" />
                <div className="imgtexts">
                  <span>start up to</span>
                  <h4>38000 <i className="fa-solid fa-bangladeshi-taka-sign"></i></h4>
                </div>
              </div>
            </div>
            <div className="wmnimage_container">
              <div className="imgwithtextbox">
                <img src={wmntwo} alt="" className="wmnimg" />
                <div className="imgtexts">
                  <span>start up to</span>
                  <h4>35000 <i className="fa-solid fa-bangladeshi-taka-sign"></i></h4>
                </div>
              </div>
            </div>
            <div className="wmnimage_container">
              <div className="imgwithtextbox">
                <img src={wmnthree} alt="" className="wmnimg" />
                <div className="imgtexts">
                  <span>start up to</span>
                  <h4>34000 <i className="fa-solid fa-bangladeshi-taka-sign"></i></h4>
                </div>
              </div>
            </div>
            <div className="wmnimage_container">
              <div className="imgwithtextbox">
                <img src={wmnfour} alt="" className="wmnimg" />
                <div className="imgtexts">
                  <span>start up to</span>
                  <h4>39500 <i className="fa-solid fa-bangladeshi-taka-sign"></i></h4>
                </div>
              </div>
            </div>
            <div className="wmnimage_container">
              <div className="imgwithtextbox">
                <img src={wmnfive} alt="" className="wmnimg" />
                <div className="imgtexts">
                  <span>start up to</span>
                  <h4>35600 <i className="fa-solid fa-bangladeshi-taka-sign"></i></h4>
                </div>
              </div>
            </div>
            <div className="wmnimage_container">
              <div className="imgwithtextbox">
                <img src={wmnsix} alt="" className="wmnimg" />
                <div className="imgtexts">
                  <span>start up to</span>
                  <h4>30000 <i className="fa-solid fa-bangladeshi-taka-sign"></i></h4>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default WomanCollections