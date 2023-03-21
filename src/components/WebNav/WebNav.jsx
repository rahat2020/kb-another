import React, { useState } from 'react';
import './WebNav.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import logo from '../../assets/kblogo.png';

const WebNav = ({ open, setOpen }) => {
    // const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        localStorage.setItem('open', JSON.stringify('yes'))
        setOpen(true)
    }
    const handleClickHide = () => {
        setOpen(false)
        localStorage.removeItem('open')
        // window.location.reload()
    }
    return (
        <div className="nav_home">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent navBar">
                <div className="container">
                    <div className="nav_icon">
                        {
                            open === true ?
                                <i className="fa-solid fa-xmark homeNav_icon" onClick={handleClickHide} ></i>
                                :
                                <i className="fa-solid fa-bars-staggered homeNav_icon" onClick={handleClickOpen}></i>

                        }
                        <span className="logoText">KB</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon" /> */}
                        <i className="fa-sharp fa-solid fa-bars barsicon"></i>
                    </button>
                    {/* web */}
                    <div className="collapse navbar-collapse web_version" id="navbarSupportedContent">
                        <div className="nav-item ms-auto">
                            <a className="nav-link nav_items" href="#">
                                <h4 className='logoNme'>
                                    <img src={logo} alt="logo" className='logo_png' />
                                </h4>
                            </a>
                        </div>
                        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 text-white">
                            <li className="nav-item">
                                <a className="nav-link nav_items" href="#">
                                    <LocalMallIcon className='cart_icon' />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav_items" href="#">
                                    <SearchIcon className='cart_icon' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* mobile navbar view  */}

            <nav className="navbar navbar-expand-lg navbar-light bg-transparent navBarmbl">
                <div className="container">
                    <div className="nav_icon">
                        {
                            open === true ?
                                <i className="fa-solid fa-xmark homeNav_icon" onClick={handleClickHide} ></i>
                                :
                                <i className="fa-solid fa-bars-staggered homeNav_icon" onClick={handleClickOpen}></i>

                        }
                        <span className="logoText">KB</span>
                    </div>
                    <div className="mbltItms">
                        <a className="nav-link nav_items" href="#">
                            <LocalMallIcon className='cart_icon' />
                        </a>
                        <a className="nav-link nav_items" href="#">
                            <SearchIcon className='cart_icon' />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon" /> */}
                        <i className="fa-sharp fa-solid fa-bars barsicon"></i>
                    </button>
                    {/* web */}
                    <div className="collapse navbar-collapse web_version" id="navbarSupportedContent">
                        <div className="nav-item ms-auto">
                            <a className="nav-link nav_items" href="#">
                                <h4 className='logoNme'>
                                    <img src={logo} alt="logo" className='logo_png' />
                                </h4>
                            </a>
                        </div>
                        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 text-white">
                            <li className="nav-item">
                                <a className="nav-link nav_items" href="#">
                                    <LocalMallIcon className='cart_icon' />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav_items" href="#">
                                    <SearchIcon className='cart_icon' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* mobile */}

                </div>
            </nav>

            {
                open === true ?
                    <div className="hmbannerBox">
                        <div className="hmbanner_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 className="hmbanner_subtitle">Welcome To Khan Brothers</h5>
                                        <div className="blinks">
                                            <Link to="/womancollections" className="hmbannerLinks">Luxury Lingerie</Link>
                                            <Link to="/womancollections" className="hmbannerLinks">Bridal Collection</Link>
                                            <Link to="/womancollections" className="hmbannerLinks">The Boutique</Link>
                                            <Link to="/mencollections" className="hmbannerLinks">Bride and Groom</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="hmsocial">
                                            <a href="" className="scllinks">
                                                <i className="fa-brands fa-instagram insta"></i>
                                            </a>
                                            <a href="" className="scllinks">
                                                <i className="fa-brands fa-snapchat ms-4"></i>
                                            </a>
                                            <a href="" className="scllinks">
                                                <i className="fa-brands fa-twitter ms-4"></i>
                                            </a>
                                        </div>
                                        <div className="hmmenus">
                                            <ul>
                                                <li>Home</li>
                                                <li>Women</li>
                                                <li>Man</li>
                                                <li>Our Story</li>
                                                <li>Bride and Groom</li>
                                            </ul>
                                        </div>
                                        <div className="w-50 ms-4">
                                            <div className="input-group">
                                                <input className="form-control border-end-0 border border-secondary bg-transparent text-secondary" type="search" defaultValue="search" id="example-search-input" />
                                                <span className="input-group-append">
                                                    <button className="btn btn-outline-secondary bg-transparent border-start-0 border-secondary border-bottom-1 border border-end-1 ms-n5" type="button">
                                                        <i className="fa fa-search" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }
        </div>
    )
}

export default WebNav