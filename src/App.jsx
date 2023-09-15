import React from "react"
import Header from "./componant/header/header"
import Footer from "./componant/footer/footer"
import About from "./componant/about/about"
import NotFound from "./componant/notFound/NotFond"
import Home from "./componant/homePage/home"
import Profile from "./componant/profile/profile"
import Contact from "./componant/contactUs/contact"

import './global.css'


import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from "./componant/layout/layout"




const App = () => {

    let routes = createBrowserRouter([{
        path: '', element: <Layout />,
        children: [
            { path: 'about', element: <About /> },
            { path: 'profile', element: <Profile /> },
            { path: 'contact', element: <Contact /> },
            { index: true, element: <Home /> },
            { path: "*", element: <NotFound /> }
        ],

    }]);

    return <RouterProvider router={routes}></RouterProvider>
}

export default App