import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";


const Layout = () => {

    return (

        <>
            <div class="vh-100 d-flex flex-column justify-content-between">
                <Header />

                <div className=" h-100">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </>
    )
}
export default Layout