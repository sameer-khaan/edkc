import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './sidebar';
import rect1 from '../../images/Rectangle 32.svg';
import Male from '../../images/male.svg';
import female from '../../images/female.svg';

const Account=()=> {
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
                            <Sidebar page="dashboard"/>
                            <div className="col-lg-9 col-md-10 col-sm-11 col-11">
                                <div className="box5 boxofsign">
                                    <div className="row">
                                        <div className="col-11 col-lg-11 pl-lg-5 pl-2 justify-content-center ">
                                            <center> <h3 className="justify-content-center">My account</h3></center>
                                            <div className="row  row2">
                                                <div className="col-lg-11 col-md-8 col-10  d-flex ">
                                                    <img src={rect1} alt="sideimg" className=""/>
                                                    <div className="d-flex flex-column text"> 
                                                        <h5> Name</h5>
                                                        <p>
                                                            <img src={female} alt="female"/> Female 
                                                            <img src={Male} alt="Male"/> Male
                                                        </p>
                                                        <p> Lorem ipsum dolor sit amet</p>
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
              </div>
          </section>
        </>
    );
};
export default Account;
