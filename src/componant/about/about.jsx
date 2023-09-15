import React from "react"

const About = () => {

    return (
        <>
            <div className="bg-home ">
                <div className="container h-100" >
                    <div className=" h-100 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="h1 text-white pt-2">ABOUT COMPONENT</h1>
                        <div className=" d-flex justify-content-center align-items-center gap-1 ">
                            <div className="line "></div>
                            <i class="fa-solid fa-star text-white fa-1x"></i>
                            <div className="line"></div>
                        </div>
                        <div className=" row row-cols-2  py-2">
                            <p className="p-2 text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            <p className="p-2 text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About