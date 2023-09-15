import React from "react"

const Contact = () => {

    return (
        <>
            <div className="">
                <div className="container h-100" >
                    <div className=" h-100 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="h1 pt-5  pt-2">CONATCT SECTION</h1>
                        <div className=" d-flex justify-content-center align-items-center gap-1 ">
                            <div className="line2 "></div>
                            <i class="fa-solid fa-star fa-1x"></i>
                            <div className="line2"></div>
                        </div>
                        <div className=" row py-5 my-5 w-75 g-5">
                            <input type="text" placeholder="user Name" className=" border-top-0 border-end-0 border-start-0  p-2" />
                            <input type="text" placeholder="user Age" className=" border-top-0 border-end-0 border-start-0  p-2" />
                            <input type="text" placeholder="user Email" className=" border-top-0 border-end-0 border-start-0  p-2" />
                            <input type="text" placeholder="user Password" className=" border-top-0 border-end-0 border-start-0  p-2" />
                            <button className="btn btn-success w-auto mb-5"> send massage</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Contact