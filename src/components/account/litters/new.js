import React , {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Sidebar from '../sidebar';
import img from '../../../images/back arrow.svg';

const Addlitter=()=> {

    return (
        <>
        <section id="header" className="">
              <div className="container-fluid">
                <div className="row  justify-content-center">
                    <div className="col-lg-10 col-md-10">
                        <br/>
                        <br/>
                        <br/>
                        <div className="row ">
                            <Sidebar page="litter"/>
                            <div className="col-lg-9 col-md-10 col-sm-11 col-11">
                                <div className="box5 boxofsign">
                                    <div className="row pl-3 pt-3">
                                        <div className="col-11 col-lg-11  ">
                                            <div className="row">
                                                <div className="col-lg-1  col-1">
                                                    <NavLink  to="./litters">
                                                        <button className="btn-arrow"><img src={img} alt="arrowup"/></button>
                                                    </NavLink>
                                                </div>
                                                <div className="col-lg-11 col-md-8 col-10">  
                                                    <center> <h5>Add new Litter </h5>  </center>
                                                </div>
                                            </div>                                                                                                                
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
export default Addlitter;
