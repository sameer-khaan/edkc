import React from 'react';
import './homesection.css';
import {NavLink} from 'react-router-dom';
import sideimg from '../images/dogs 1.svg'
const Home=()=> {
    return (
        <>
            <section id="header" className="d-flex align-items-center ">
              <div className="container-fluid ">
                
                <div className="row ">
                   
                    <div className="col-lg-10  col-md-9 col-lg-10 pt-5 mx-auto">
                        <div className="row justify-content-center mx-auto">
                            <div className="col-md-12 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mx-auto">
                                <h2 className="heading">Short, punchy explainer telling you what EDKC does and is</h2>
                                <div className="mt-3 cta">
                                    <a href="" className="btn-get-started">
                                        Main CTA
                                    </a>
                                    
                                </div>
                            </div>
                            <div className=" col-md-12 col-lg-6 order-1 order-lg-2 header-img align-items-end  ">
                                <img src={sideimg} alt="sideimg" className=""/>

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