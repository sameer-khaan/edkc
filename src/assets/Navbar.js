import React  from 'react';
import {NavLink} from 'react-router-dom';
import phone from '../images/phone.svg';
import logo from '../images/logo.svg';
import "./navbar.css";

const Navbar=()=>{
    return(
        <>
        <nav class="col-lg-11 col-md-10 mx-auto navbar navbar-expand-lg navbar-light ">
          <div className="d-flex LOGO flex-column">
          <NavLink className="nav-link pl-0 ml-0" to = "/">
            <img src={logo}/>
          </NavLink>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav move ml-auto">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/"><img src={phone}/>  0123456789 </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">Register Dogs</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">Contact</NavLink>
              </li>
              <form className="form my-2 my-lg-0">
              <NavLink className="btn my-0 my-sm-0" to="/signin"> Login</NavLink>
            </form>
            </ul>
          </div>
        </nav>
        </>
    );
};
export default Navbar;