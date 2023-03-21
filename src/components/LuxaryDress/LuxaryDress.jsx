import React,{useEffect} from 'react';
import './LuxaryDress.css';
import ldimg from '../../assets/luxary.jpeg';
import back from '../../assets/backsquare.jpg';
import { Link } from 'react-router-dom';

const LuxaryDress = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    
    }, [])
    return (
        <div className="luxarydress">
            <div className="row">
                <div className="col-md-6">
                    <div className="ldcontanier">
                        <div className="ldimg_container">
                            <img src={ldimg} alt="" className="ldimg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="ldscndbox">
                        <div className="bgrght"></div>
                        <div className="ldrightbox">
                            <p className="ld_subtitle">Discover</p>
                            <h2 className="ld_title">Perfect Luxury Dresses Especially For You</h2>
                            <p className="ld_para">Our goal is to continue developing our unique technological systems in order to further enhance our capabilities and deliver our designs to each beautiful woman looking to wear a garment created for her and only her. </p>
                            <Link to="/mencollections" className='links'>
                                <span>View the Collection ⟶</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LuxaryDress