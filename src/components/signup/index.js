import React from 'react';
import img from '../../images/Mask Group.svg';
import { NavLink } from 'react-router-dom';
import Fb1  from '../../images/akar-icons_facebook-fill.svg';

const Signup=()=> {
    return (
        <>
            <section id="header" className="">
              <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="heading2">Join us, it's free</h2>
                        <br/>
                        <div className="row box4">
                            <div className="col-lg-3 mx-md-auto mx-lg-0  col-md-4 col-sm-12 order-2 order-lg-1 mb-4 text-center">
                                <img src ={img} alt="group dog" className="img1"/>
                            </div>
                            <div className="col-lg-6 col-md-10 mx-auto  mx-md-auto mx-lg-0 col-sm-10 col-10 justify-content-center order-1 order-lg-2 ">
                                <div className="box5 mx-auto boxofsign">
                                <h5 className="pt-3 signin">Sign up</h5>
                                <div className="row  ">
                                    <div className="col-xl-8 col-md-10 col-11 mx-auto">
                                    <form className="mx-auto ">
                                        <div className="form-group">
                                            <input type="text" className="form-control form1 pt-4" id="exampleInputName1" placeholder="Fullname"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form1 pt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form1 pt-4" id="exampleInputPassword1" placeholder="Create Password"/>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" for="exampleCheck1">Lorem ipsum dolor</label>
                                        </div>
                                        <br/>
                                        <NavLink className="btn" to='./dashboard'> Create account</NavLink>
                                        <br/><br/>
                                        <p className="text1">or</p>
                                        <NavLink className="btn btn_fb" to='./dashboard'> <img src = {Fb1} alt="logo"/> Continue with Facebook</NavLink>
                                        <NavLink className="nav-link text1 link1 m-0" to='./signin'> Already have account?</NavLink>
                                </form>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
              </div>
          </section>
        </>
    );
};
export default Signup;