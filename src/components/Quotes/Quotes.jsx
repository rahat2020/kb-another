import React from 'react';
import './Quotes.css';
import qtsbanner from '../../assets/poshtexture.jpg';

const Quotes = () => {
    return (
        <div className="qts">
            <div className="qts_container">
                <div className="qtsimg_con">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h5 className="qts_title">“Perfection Is Achieved Not When Theres Nothing Left To Add,
                            <br />
                            But When Theres Nothing Left To Take Away”</h5>
                        <p className="qts_sub">ANTOINE DE SAINT-EXUPERY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quotes