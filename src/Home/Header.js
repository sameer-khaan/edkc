import React  from 'react';
import Navbar from '../assets/Navbar';
import Section1 from './section1';

const Header=()=>{
    return(
        <>
        <div className="container-fluid back">
        <div className="col-lg-12 col-12 back1">
          <Navbar/>
          <Section1/>
        </div>
        </div>
        </>
    )
}
export default Header;