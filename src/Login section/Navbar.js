import React  from 'react';
import {NavLink} from 'react-router-dom';
import GiSmartphone from '../images/mobile.svg';
import img32 from '../images/Vector (1).svg'
import "./Navbar.css";
import Section1 from './login';
const Navbar=()=>{
    return(
        <>
        <div className="container-fluid  back ">
        <div className="col-lg-12 ">
        <nav class="navbar navbar-expand-lg navbar-light ">
           <div className="d-flex LOGO flex-column">
           <NavLink className="nav-link" to = "/">
             <h1> EDKC</h1>
             <p>European Dog Kennel Club </p>
             </NavLink>
           </div>                   
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item ">
     <NavLink className="nav-link" to="/">
       <img src={GiSmartphone} alt="number" className="phoneSVG"/>
       0123456789 
       </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Signin">Register Dogs</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link " to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/Contactus">Contact</NavLink>
      </li>
    </ul>
    <form className="form my-2 my-lg-0">
    <NavLink className="btn " to="/Signin"><img src = {img32} alt="vector2"/> My account</NavLink>
    </form>
  </div>
</nav>

</div>
<Section1/>
</div>

        </>
    )
}
export default Navbar;