import React from "react";
import styleProfile from './profile.module.css'
import img1 from './../../assets/port1.png'
import img2 from './../../assets/port2.png'
import img3 from './../../assets/port3.png'

const Profile = () => {
    return (
        <>
            <div className={styleProfile.bg_profile}>
                <div className="container h-100 py-3" >
                    <div className=" h-100 d-flex justify-content-center align-items-center flex-column">

                        <h1 className="h1  pt-2">PORTFOLIO COMPONENT</h1>
                        <div className=" d-flex justify-content-center align-items-center gap-1 ">
                            <div className="line2 "></div>
                            <i class="fa-solid fa-star  fa-1x"></i>
                            <div className="line2"></div>
                        </div>
                        <div className="cardContaner row g-5 py-3 ">
                            {/* start-card  */}
                            <div className="col-lg-4 col-md-6">
                                <div className={`${styleProfile.card_cm} position-relative `}>
                                    <div className={`${styleProfile.sideOne} bg-black text-info h-100`}>
                                        <img src={img1} alt="" className=" img-fluid h-100" />
                                    </div>
                                    <div className={`${styleProfile.sideTwo} bg-info h-100 d-flex justify-content-center align-items-center `}>
                                        <i class="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div>
                            {/* end-card  */}
                            {/* start-card  */}
                            <div className="col-lg-4 col-md-6">
                                <div className={`${styleProfile.card_cm} position-relative `}>
                                    <div className={`${styleProfile.sideOne} bg-black text-info h-100`}>
                                        <img src={img2} alt="" className=" img-fluid h-100" />
                                    </div>
                                    <div className={`${styleProfile.sideTwo} bg-info h-100 d-flex justify-content-center align-items-center `}>
                                        <i class="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div>
                            {/* end-card  */}
                            {/* start-card  */}
                            <div className="col-lg-4 col-md-6">
                                <div className={`${styleProfile.card_cm} position-relative `}>
                                    <div className={`${styleProfile.sideOne} bg-black text-info h-100`}>
                                        <img src={img3} alt="" className=" img-fluid h-100" />
                                    </div>
                                    <div className={`${styleProfile.sideTwo} bg-info h-100 d-flex justify-content-center align-items-center `}>
                                        <i class="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div>
                            {/* end-card  */}
                            {/* start-card  */}
                            <div className="col-lg-4 col-md-6">
                                <div className={`${styleProfile.card_cm} position-relative `}>
                                    <div className={`${styleProfile.sideOne} bg-black text-info h-100`}>
                                        <img src={img1} alt="" className=" img-fluid h-100" />
                                    </div>
                                    <div className={`${styleProfile.sideTwo} bg-info h-100 d-flex justify-content-center align-items-center `}>
                                        <i class="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div>
                            {/* end-card  */}
                            {/* start-card  */}
                            <div className="col-lg-4 col-md-6">
                                <div className={`${styleProfile.card_cm} position-relative `}>
                                    <div className={`${styleProfile.sideOne} bg-black text-info h-100`}>
                                        <img src={img3} alt="" className=" img-fluid h-100" />
                                    </div>
                                    <div className={`${styleProfile.sideTwo} bg-info h-100 d-flex justify-content-center align-items-center `}>
                                        <i class="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div>
                            {/* end-card  */}
                            {/* start-card  */}
                            <div className="col-lg-4 col-md-6">
                                <div className={`${styleProfile.card_cm} position-relative `}>
                                    <div className={`${styleProfile.sideOne} bg-black text-info h-100`}>
                                        <img src={img2} alt="" className=" img-fluid h-100" />
                                    </div>
                                    <div className={`${styleProfile.sideTwo} bg-info h-100 d-flex justify-content-center align-items-center `}>
                                        <i class="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div>
                            {/* end-card  */}


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile