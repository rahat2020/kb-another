import React from 'react';
import footerLogo from '../../assets/footer.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <div className="row rowmbtTop">
                    <div className="col-md-6">
                        <div className="footerIcn_container">
                            <FacebookOutlinedIcon className='footer_icon' />
                            <InstagramIcon className='footer_icon insta' />
                            <GoogleIcon className='footer_icon insta' />
                            {/* <TwitterIcon className='footer_icon twiter'/> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer_rihgt">
                            <span className='footLinks'>HOME</span>
                            <span className='footLinks'>ABOUT US</span>
                            <span className='footLinks'>CONTACT</span>
                            <span className='footLinks'>OUR PRODUCTS</span>
                            <span className='footLinks'>BLOG</span>
                        </div>
                    </div>
                </div>
                <div className="oficeaddressBox">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="shop">
                                <span className='shopLinks'>HOME</span>
                                <span className='shopLinks'>ABOUT US</span>
                                <span className='shopLinks'>CONTACT</span>
                                <span className='shopLinks'>OUR PRODUCTS</span>
                                <span className='shopLinks'>BLOG</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shop2">
                                <h3 className='logoname'>Khan Brothers</h3>
                                <span className='shopaddres'>See our Booking Schedule for Hours
                                    Appointments Recommended
                                    4 Purchase Street, Rye, New York</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shop3">
                                <span className='logoname'>Ghulshan Office</span>
                                <span className='logoname'>Dhanmondi Office</span>
                                <span className='logoname'>Basundara Office</span>
                                <span className='shop3addres mt-3'>See our Booking Schedule for Hours
                                    Appointments Recommended
                                    4 Purchase Street, Rye, New York</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <hr className='hr' />
                    <div className="col-md-6">
                        <div className="footerCopyrihgt">
                            <p className="copyright fw-bold">© 2023 All rights reserved Khan Brothers.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footerLogoright">
                            <img src={footerLogo} alt="footer-log" className='footerLogo' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer



