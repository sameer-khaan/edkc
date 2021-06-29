import React  from 'react';
import {NavLink} from 'react-router-dom';
import img32 from '../images/Vector (1).svg';
import phone from '../images/phone.svg';
import "./navbar.css";

const Navbar=()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light ">
           <div className="d-flex LOGO flex-column">
           <NavLink className="nav-link " to = "/">
             <h1>EDKC</h1>
             <p>European Dog Kennel Club </p>
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
        <NavLink className="nav-link" to="/Signin">Register Dogs</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link " to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/Contact">Contact</NavLink>
      </li>
      <form className="form my-2 my-lg-0">
    <NavLink className="btn " to="/Signin"><img src = {img32} alt="vector2"/> My account</NavLink>
    </form>
    </ul>
   
  </div>
</nav>
        </>
    )
}
export default Navbar;