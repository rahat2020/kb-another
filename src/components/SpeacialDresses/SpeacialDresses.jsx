import React,{useEffect} from 'react';
import './SpeacialDresses.css';
import scnd from '../../assets/second_com.jpg';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';

const SpeacialDresses = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [])
    return (
        <div className='sd'>
            <div className="spdress">
                {/* <img src={scnd} alt="" className='spdressImg'/> */}
                <div className="container">
                    <div className="spfristbox">
                        <p className="miss_subtitle">our missions</p>
                        <h2 className="spd_title">Special Dresses For Special People</h2>
                        <p className='spd_para'>Our goal is to continue developing our unique technological systems in order to further enhance our capabilities and deliver our designs to each beautiful woman looking to wear a garment created for her and only her. </p>
                    <Link to="/womancollections" className='links'>
                        <span>View the Collection ⟶</span>
                    </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="spscndbox">
                        <h2 className="spdscnd_title">Because You Deserve The Best</h2>
                        <p className='spd_para'>Our goal is to continue developing our unique technological systems in order to further enhance our capabilities and deliver our designs to each beautiful woman looking to wear a garment created for her and only her.</p>
                        <div className="turez-block-arrow-link">
                            <Link to="/womancollections" className='links'>
                                <span>View the Collection ⟶</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeacialDresses