import React from "react"
import styles1 from './footer.module.css'
// import "./global.css"


const Footer = () => {

    return (
        <>
            <div>
                <div className={`  ${styles1.customFooterBackgroundColor} py-5 m-0 `}>
                    <div className={`container`}>
                        <div className="row row-cols-3 text-white justify-content-around ">
                            <div className="text-center">
                                <h2>LOCATION</h2>
                                <p>2215 john Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                            <div className="text-center">
                                <h2>AROUND THE WEB</h2>
                                <div className=" d-flex gap-3 justify-content-center align-items-center py-2">
                                    <i class="fa-brands fa-facebook fa-1x border p-2 rounded-circle border-1 border-white "></i>
                                    <i class="fa-brands fa-xing fa-1x border p-2 rounded-circle border-1 border-white"></i>
                                    <i class="fa-brands fa-instagram fa-1x border p-2 rounded-circle border-1 border-white"></i>
                                    <i class="fa-brands fa-linkedin-in fa-1x border p-2 rounded-circle border-1 border-white"></i>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2>ABOUT FREELANCER</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`text-center p-3 text-white h6 m-0 ${styles1.customFooterBackgroundColorTwo}`}>Copyright © Your Website 2021</div>
            </div >
        </>
    )
}

export default Footer