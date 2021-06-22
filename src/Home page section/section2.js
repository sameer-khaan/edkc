import React from 'react';
import './homesection.css';
import rect from '../images/Rectangle 35.svg';

const Home=()=> {
    return (
        <>
            <section id="header" className="d-flex align-items-center justify-content-center">
              <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-10  col-xl-10 col-md-10 col-sm-6 pt-5 mx-auto">
                    <h2 className="heading2">Welcome to the European Dogs Kennel Club</h2>
                        <div className="row ">
                         
                            <div className="col-md-10 col-lg-6    colo">
                                <img src={rect} alt="sideimg" className=""/>
                                                              
                            </div>
                            
                            <div className="col-md-10  col-lg-6 pt-lg-0 colo d-flex justify-content-center flex-column ">
                            <h4 >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </section>
        </>
    );
};
export default Home;