import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome} from '@fortawesome/free-solid-svg-icons';
import './layout.css'


const Navbar=()=> {

    return<div>
          <BrowserRouter>
          <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <NavLink className="navbar-brand text" as={NavLink} to={"/"}>
                <FontAwesomeIcon icon={faHome} className="fahome"/>
                    Real Estate
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" 
                              as={NavLink} to={"/home"}>Home</NavLink>	
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" 
                              as={NavLink} to={"/about"}>About</NavLink>	
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <NavLink className="btn mr-sm-2 login" 
                        as={NavLink} to={"/"}>Logout</NavLink>
                    
                    </form>
                </div>
            </nav>
            <Routes>
                    <Route>
                    <Route index path="/" element={<Login />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
          </BrowserRouter>
    </div>
}

export default Navbar;