import React from 'react';
import './homesection.css';
import rect from '../images/Vector.svg';
import rect1 from '../images/Rectangle 32.svg';
import rect2 from '../images/Group 3.svg';
import rect3 from '../images/Mask Group.svg';

const Home=()=> {
    return (
        <>
            <section id="header" className=" align-items-center ">
              <div className="container-fluid  ">
                <div className="row justify-content-center">
                    <div className="col-lg-10  col-md-12  mx-auto">
                        <h2 className="heading2">Frequently asked</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 col-10 d-flex flex-column  ">
                                <div className="infobox">
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>

                                </div>  
                                <div className="infobox">
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>   
                                <div className="infobox">
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>

                                </div>                                
                            </div>                            
                            
                            <div className=" col-lg-6 col-md-8 col-10  col2 d-flex flex-column">
                                
                            <div className="infobox2">
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>

                                </div>  
                                <div className="infobox2">
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>

                                </div>  
                                <div className="infobox2">
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>

                                </div>                         
                            </div>                  
                        </div>

                        <div className="mt-3 faq justify-content-center align-center">
                                    <a href="" className="btn-get-started">
                                        All FAQS
                                    </a>
                        </div>
                        <br/>                                        
                    </div>
                </div>
              </div>
          </section>
        </>
    );
};
export default Home;