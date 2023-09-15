import React from "react";
import img1 from './../../assets/avataaars.svg'

const Home = () => {
    return (
        <>
            <div className="bg-home ">
                <div className="container h-100" >
                    <div className=" h-100 d-flex justify-content-center align-items-center flex-column">
                        <img src={img1} alt="" width="220px" />
                        <h1 className="h1 text-white pt-2">START FRAMEWORK</h1>
                        <div className=" d-flex justify-content-center align-items-center gap-1 ">
                            <div className="line "></div>
                            <i class="fa-solid fa-star text-white fa-1x"></i>
                            <div className="line"></div>
                        </div>
                        <p className="pt-2 text-white">Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home