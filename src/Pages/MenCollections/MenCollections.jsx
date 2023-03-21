import React,{useEffect} from 'react';
import mbl from '../../assets/mbl.mp4'

const MenCollections = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    
    }, [])
    return (
        <div className="bridegroom">
            <div className="container">
                <div className="brgm">
                    <div className="text-center">
                        <h2 className='brgm_title'>Men Collection</h2>
                        <div className="mt-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="brgmContainer">
                                        <video src={mbl} controls className="brgmvideo"></video>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="brgmright">
                                        <div className="brgmtitlecon">
                                            <h2 className="brgmrightTitle">
                                                <span className='border-bottom border-dark'>Our Wedding</span> Dresses</h2>
                                        </div>
                                        <h4 className="brgmrightsubTitle">A personalized wedding dress Experiences</h4>
                                        <div className="brgmparacon">
                                            <p className='brgmpara'>With the big day soon approaching, you'll want to look your absolute best for your wedding. Twirl has everything you'll need from wedding tuxedos, wedding suits and more for both you and your groomsmen.</p>

                                            <p className='brgmpara'>Twirl offers wedding tuxedo rentals from the finest designers plus our expert stylists have pulled together signature collections and can help answer any questions you may have.</p>

                                            <button className='btn btn-secondary fw-bold'>Browse Styles</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-bottom">
                        <h2 className='text-center weddingtitle'>Our wedding Dresses</h2>
                    </div>

                    <div className="brgmdress_container">
                        <div className="brdcardimgs_con">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391206/men3_tfjzhv.jpg" alt="Avatar" className="imageconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                        <div className="brdcardimgs_con">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391204/men1_rtdbfd.jpg" alt="Avatar" className="imageconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                        <div className="brdcardimgs_con">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391202/Untitled_Session1506_ysjuyf.jpg" alt="Avatar" className="imageconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                        <div className="brdcardimgs_con">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391196/Untitled_Session1534_rfhqk1.jpg" alt="Avatar" className="imageconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                        <div className="brdcardimgs_con">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391195/men4_vc4mdj.jpg" alt="Avatar" className="imageconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                    </div>

                    <div className="brgmBig">
                        <div className="brgbigimg_container">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391195/men4_vc4mdj.jpg" alt="Avatar" className="imageBigconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                        <div className="brgbigimg_container">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391363/Untitled_Session1351_j3k8qc.jpg" alt="Avatar" className="imageBigconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                        <div className="brgbigimg_container">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391360/DP9A9954_bqti1t.jpg" alt="Avatar" className="imageBigconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                        <div className="brgbigimg_container">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391357/Untitled_Session1055_ufdwpb.jpg" alt="Avatar" className="imageBigconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                        <div className="brgbigimg_container">
                            <img src="https://res.cloudinary.com/rahatdev1020/image/upload/v1679391206/men3_tfjzhv.jpg" alt="Avatar" className="imageBigconts" />
                            <div class="middle">
                                <h6 class="text">John Doe</h6>
                                <p class="text">price: 34000</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default MenCollections