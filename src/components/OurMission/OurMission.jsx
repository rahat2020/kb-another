import React from 'react';
import './OurMission.css';
import bacsqr from '../../assets/backsquare_copy.jpg';
import mbl from '../../assets/mbl.mp4'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Link} from 'react-router-dom';

const OurMission = () => {
    return (
        <div className="missions">
            <div className="row">
                <div className="col-md-6">
                    <div className="misLeft">
                        <div className=" miss_leftbox">
                            <p className="miss_subtitle">Discover</p>
                            <h2 className='missleftTitle'>Hand Stitched And Created With Love By Our Expert Designers</h2>
                            <p className="miss_para">Our goal is to continue developing our unique technological systems in order to further enhance our capabilities and deliver our designs to each beautiful woman looking to wear a garment created for her and only her. </p>

                            <div className="missleftbtn_container">
                                    <span className='the-arrow -left'>
                                        <span className="shaft"></span>
                                        <span className="main">
                                            <Link to="/mencollections" className="links" style={{textDecoration:'none'}}>
                                                <span className="text">
                                                    View the Collection ⟶
                                                </span>
                                            </Link>

                                            {/* <span className="the-arrow -right">
                                                <span className="shaft"></span>
                                            </span> */}
                                        </span>
                                    </span>
                         
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="missRight">
                        <div className="missbgimg_con">
                            {/* <img src={bacsqr} alt="" className="bgimg" /> */}
                            <div className="videoContainer">
                                <video src={mbl} controls className="missrightVideo"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission