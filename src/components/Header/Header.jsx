import React, { useState } from 'react';
import WebNav from '../WebNav/WebNav';
import './Header.css';
import stockVideo from '../../assets/stockvideo.mp4';
import flower from '../../assets/flower.png';
import Hori_flower from '../../assets/horizontal_flower.png';
import { Link } from 'react-router-dom';

const Header = () => {
    // const myValue =JSON.parse(localStorage.getItem('open')) 
    // console.log('hideClass', myValue)

    const [open, setOpen] = useState(false)

    return (
        <section className="header">
            <div className="header_con">
                <div className="">
                    <div className="headerNav">
                        <WebNav open={open} setOpen={setOpen} />
                    </div>
                </div>
                <div className="video">
                    <video
                        autoPlay
                        loop
                        id="video"
                    // style={{
                    //     position: 'absolute',
                    //     width: '100%',
                    //     left: '50%',
                    //     top: '50%',
                    //     height: '100%',
                    //     objectFit: 'cover',
                    //     transform: 'translate(-50%, -50%)',
                    //     zIndex: "-1"
                    // }}

                    >
                        <source src={stockVideo} type="video/mp4" />
                    </video>
                </div>
                {
                    open === true ?
                        ""
                        :
                        <>
                            <div className="header_content">
                                <div className="header_Cont">
                                    <div className="hImg_container">
                                        <img src={flower} alt="flower" className="header_fstImg" />
                                    </div>
                                    <h2 className="header_title text-white">THE ART OF LUXURY APPAREL</h2>
                                    <p className='text-center headerScn_title'>FOR A LAVISH LIFESTYLE</p>
                                    <div className="hImg_container">
                                        <img src={Hori_flower} alt="flower" className="header_fstImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="headerScnd_box">
                                <div className="container">
                                    <hr style={{ backgroundColor: '#fff' }} />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="headerBoxOne text-start">
                                            <Link to="/mencollections" className="headerlinks">
                                                <p className="head_menu">DISCOVER</p>
                                                <h3 className="headerFo_title">Men Collection</h3>
                                            </Link>
                                        </div>
                                        <div className="headerBoxOne text-center">
                                            <Link to="/womancollections"  className="headerlinks">
                                                <p className="head_menu">BROWSE</p>
                                                <h3 className="headerFo_title">Woman Collection</h3>
                                            </Link>
                                        </div>
                                        <div className="headerBoxOne text-end">
                                            <Link to="/aboutus" className="headerlinks">
                                                <p className="head_menu">ABOUT US</p>
                                                <h3 className="headerFo_title">Our Story</h3>
                                            </Link>
                                        </div>
                                    </div>
                                    <hr style={{ backgroundColor: '#fff' }} />
                                </div>
                            </div>
                        </>
                }

            </div>


        </section>
    )
}

export default Header