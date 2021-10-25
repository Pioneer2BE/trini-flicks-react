import React from 'react'

import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to={'/'}>
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                </Link>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/movies">Movies</Link>
                    <Link className="navbar-item" to="/tvShows">TV Shows</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="button is-primary" to="/sign-up">
                                <strong>Sign up</strong>
                            </Link>
                            <Link className="button is-light" to="/log-in">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
