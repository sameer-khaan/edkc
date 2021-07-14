import React from 'react';
import { NavLink } from 'react-router-dom';
import rect1 from '../../images/register-dogs.svg';
import rect2 from '../../images/register-litters.svg';
import rect3 from '../../images/register-kennel.svg';
import rect4 from '../../images/3-gen-pedigree.svg';
import rect5 from '../../images/certificate.svg';
import rect6 from '../../images/all-dogs.svg';

const Home=()=> {
    return (
        <>
            <section id="header" className=" align-items-center  cards1 mx-auto justify-content-center ">
              <div className="container-fluid  card3">
                <div className="row">
                    <div className="col-lg-10  col-md-9 col-lg-10  mx-auto">
                    <h2 className="heading2 color2">What do we do?</h2>
                        <div className="row justify-content-center ">
                            <div className="col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card " >
                                    
                                    <div className="card-body    ">
                                        <img src={rect1} alt="sideimg" className=""/>
                                        <h5 className="card-title">Register dogs</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card" >                                    
                                    <div className="card-body mx-auto">
                                        <img src={rect2} alt="sideimg" className=""/>
                                        <h5 className="card-title">Register litters</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card" >
                                    
                                    <div className="card-body">
                                        <img src={rect3} alt="sideimg" className=""/>
                                        <h5 className="card-title">Register a kennel</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>

                        <div className="row justify-content-center row1">
                            <div className="col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card " >
                                    
                                    <div className="card-body    ">
                                        <img src={rect4} alt="sideimg" className=""/>
                                        <h5 className="card-title">3 generation and new pedigrees</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card" >                                    
                                    <div className="card-body mx-auto">
                                        <img src={rect5} alt="sideimg" className=""/>
                                        <h5 className="card-title">Litter certificates</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card" >
                                    
                                    <div className="card-body">
                                        <img src={rect6} alt="sideimg" className=""/>
                                        <h5 className="card-title">All dogs accepted</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>      
                        <div className="mt-5 ">
                            <NavLink className="btn-aboutus text-white" to='./about'> About us</NavLink>
                        </div>
                    </div>
                </div>
              </div>
          </section>
        </>
    );
};
export default Home;