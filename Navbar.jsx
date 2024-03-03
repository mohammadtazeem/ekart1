import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            {/* <!-- Navbar start --> */}
            <div className="container-fluid fixed-top">
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between top-info ps-2"> 
                        
                            <small><i className="fa fa-map-marker me-2 text-white"></i> <a target='_blank' rel='noreferrer' href="#" className="text-white">A-40, Sector16, Noida</a></small>
                            <small><i className="fa fa-envelope me-2 text-white"></i><a target='_blank' rel='noreferrer' href="mailto:modhtazeem5623@gmail.com" className="text-white">modhtazeem5623@gmail.com</a></small>
                            <small><i className="fa fa-phone me-2 text-white"></i><a target='_blank' rel='noreferrer' href="tel:8307808627" className="text-white">+91-8307808627</a></small>
                            <small><i className="fa fa-whatsapp me-2 text-white"></i><a target='_blank' rel='noreferrer' href="https://wa.me/8307808627" className="text-white">+91-8307808627</a></small>
                        </div>
                        {/* <div className="top-link pe-2">
                            <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                            <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                            <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
                        </div> */}
                    
                </div>
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <Link to="/" className="navbar-brand"><h1 className="text-primary display-6">ekart</h1></Link>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/shop" className="nav-item nav-link">Shop</Link>
                                <Link to="/product" className="nav-item nav-link">Shop Detail</Link>
                                <div className="nav-item dropdown">
                                    <a target='_blank' rel='noreferrer' href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0 bg-primary rounded-0">
                                        <Link to="/cart" className="dropdown-item">Cart</Link>
                                        <Link to="/checkout" className="dropdown-item">Chackout</Link>
                                        <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                    </div>
                                </div>
                                <Link to="/contect" className="nav-item nav-link">Contact</Link>
                                <Link to="/Admin" className="nav-item nav-link">Admin</Link>
                            </div>
                            <div className="d-flex m-3 me-0">
                                <button className="btn-search btn border border-primary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                                <Link to="/cart" className="position-relative me-4 my-auto navbar-icon">
                                    <i className="fa fa-shopping-bag fa-2x"></i>
                                    <span className="position-absolute bg-primary rounded-circle d-flex align-items-center justify-content-center text-light px-1" style={{ top: "5px", left: "15px", height: "20px", minWidth: "20px" }}>3</span>
                                </Link>
                                <a target='_blank' rel='noreferrer' href="#" className="my-auto navbar-icon">
                                    <i className="fas fa-user fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}


            {/* <!-- Modal Search Start --> */}
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal Search End --> */}

        </>

    )
}
