import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="mob">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bgg-dark">
                        <Link className="logo" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <Link className="nav-link" to="/cars">
                            Our Cars
                        </Link>
                        <Link
                            className="nav-link"
                            aria-current="page"
                            to="/prices"
                        >
                            Prices
                        </Link>
                        <Link className="nav-link" to="/local">
                            Localisation
                        </Link>
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
            <nav className="nav">
                <Link className="logo" to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <Link className="nav-link" to="/cars">
                    Our Cars
                </Link>
                <Link className="nav-link" aria-current="page" to="/prices">
                    Prices
                </Link>
                <Link className="nav-link" to="/local">
                    Localisation
                </Link>
                <Link className="nav-link" to="/contact">
                    Contact
                </Link>
            </nav>
        </>
    );
}
