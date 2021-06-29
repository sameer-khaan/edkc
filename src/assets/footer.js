import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logofooter.svg';
import './footer.css';

const Footer=()=> {
    return (
        <>
            <section id="header" className="align-items-center footer1">
              <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-9 col-md-10 col-lg-10 mx-auto px-4">
                        <div className="row pt-5 mx-auto rowfooter">
                            <div className="col-lg-6 col-md-12 footerlogo pl-0 mb-4">
                                <NavLink to = "/">
                                    <img src={logo}/>
                                </NavLink>
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="d-flex flex-column column3 ">
                                    <h4 className="footerheading">About</h4>
                                    <p><NavLink className="text-white" to='./about'> About us</NavLink></p>
                                    <p>Terms and conditions</p>
                                    <p>Privacy policy</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="d-flex flex-column column3 ">
                                    <h4 className="footerheading">Manage</h4>
                                    <p><NavLink className="text-white" to='./signin'> Login</NavLink></p>
                                    <p><NavLink className="text-white" to='./contact'> Contact us</NavLink></p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="d-flex flex-column column3 ">
                                    <h4  className="footerheading">Register</h4>
                                    <p><NavLink className="text-white" to='./signup'> Create an account</NavLink></p>
                                    <p><NavLink className="text-white" to='./adddog'> Register a dog</NavLink></p>
                                    <p><NavLink className="text-white" to='./addlitter'> Register a litter</NavLink></p>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4"> 
                            <div className="col-12 column3">
                                <p>© 2021 European Dog Kennel Club</p>
                            </div>                            
                        </div>
                        <div className="row"> 
                            <div className="col-12 column3">
                                <p>Company number: 12345678</p>
                            </div>                            
                        </div>
                        <div className="row"> 
                            <div className="col-12 col-lg-10 column3">
                                <p>Register address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>  
                            <div className="col-12 col-lg-2 lastline column3">
                                <p>Website by EDKC</p>
                            </div>                          
                        </div>
                    </div>
                </div>
              </div>
          </section>
          </>
    );
};
export default Footer;