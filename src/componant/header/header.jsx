import React from "react"
import { Link } from "react-router-dom"
import styleHead from './header.module.css'

const Header = () => {


    return (

        <>
            <nav className={`navbar navbar-expand-lg   ${styleHead.customheaderBackgroundColor} `} data-bs-theme="dark">
                <div className="container py-3">
                    <Link to='' className="navbar-brand text-white h2" >START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link  " aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='about'>about</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link  " to='/Profile'>Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/Contact'>Contact</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )

}

export default Header