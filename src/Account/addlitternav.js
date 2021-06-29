import React  from 'react';
import Navbarlogin from '../assets/Navbarlogin';
import Section1 from './addlitter';

const Navbar=()=>{
    return(
        <>
        <div className="container-fluid back">
        <div className="col-lg-12 col-12 back1">
          <Navbarlogin/>
          <Section1/>
        </div>
        </div>
        </>
    )
}
export default Navbar;