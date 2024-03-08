import React from "react"

/* ICONS */
import { AiOutlineHome } from "react-icons/ai"
import { GoInfo } from "react-icons/go";
import { GrServices } from "react-icons/gr";
import { PiAddressBookLight } from "react-icons/pi";

const Navbar = () => {
    return (
        <nav className
            ="navbar navbar-expand-lg bg-body-tertiary shadow rounded fixed-top m-1">
            <div className
                ="container-fluid ">
                <a className
                    ="navbar-brand me-auto" href="#">Start Boostrap</a>
                <div className
                    ="collapse navbar-collapse  justify-content-center" id="navbarNav">
                    <ul className
                        ="navbar-nav" >
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link active" aria-current="page" href="#"><AiOutlineHome /> Home</a>
                                
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link" href="#"><GoInfo /> About</a>
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link" href="#"><GrServices /> Services</a>
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link"><PiAddressBookLight /> Contact</a>
                        </li>
                    </ul>
                </div>
                <a href="#" className="login-button">Login</a>
                <button className
                    ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className
                        ="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

    )
}

export default Navbar