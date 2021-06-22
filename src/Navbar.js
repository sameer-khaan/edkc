import React  from 'react';
import {NavLink} from 'react-router-dom';
import { GiSmartphone } from 'react-icons/gi';
import logo from './images/Group 5.svg';
import "./Navbar.css";
const Navbar=()=>{
    return(
        <>
        <div className="container-fluid">
        <div className="col-lg-11 mx-auto">
        <nav class="navbar navbar-expand-lg navbar-light ">
           <div className="d-flex LOGO flex-column">
             <h1> EDKC</h1>
             <p>European Dog Kennel Club </p>
           </div>                   
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
     <NavLink className="nav-link" to="/"><GiSmartphone className=''/>0123456789 </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Register Dogs</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link " to="/">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/">Contact</NavLink>
      </li>
    </ul>
    <form className="form my-2 my-lg-0">
      <button className="btn  my-2 my-sm-0" type="submit">Login</button>
    </form>
  </div>
</nav>
</div>
</div>

        </>
    )
}
export default Navbar;