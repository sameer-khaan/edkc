import React from 'react';
import './homesection.css';
import rect1 from '../images/Rectangle 26.svg';

const Home=()=> {
    return (
        <>
            <section id="header" className=" align-items-center mx-auto justify-content-center ">
              <div className="container-fluid  cards1">
                <div className="row">
                    <div className="col-lg-10  col-md-9 col-lg-10  mx-auto">
                    <h2 className="heading2">What do we do?</h2>
                        <div className="row justify-content-center ">
                            <div className="col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card " >
                                    
                                    <div className="card-body    ">
                                        <img src={rect1} alt="sideimg" className=""/>
                                        <h5 className="card-title">Anybody can bacome a member</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card" >                                    
                                    <div className="card-body mx-auto">
                                        <img src={rect1} alt="sideimg" className=""/>
                                        <h5 className="card-title">there 3 generation of pedigrees</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card" >
                                    
                                    <div className="card-body">
                                        <img src={rect1} alt="sideimg" className=""/>
                                        <h5 className="card-title">We can provide new pedigrees</h5>
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
                                        <img src={rect1} alt="sideimg" className=""/>
                                        <h5 className="card-title">All dogs are accepted</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card" >                                    
                                    <div className="card-body mx-auto">
                                        <img src={rect1} alt="sideimg" className=""/>
                                        <h5 className="card-title">Litter certificates</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-10 cardcol">
                                <div className="card" >
                                    
                                    <div className="card-body">
                                        <img src={rect1} alt="sideimg" className=""/>
                                        <h5 className="card-title">Lorem ipsum dolor sit </h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        
                                    </div>
                                </div>
                            </div>
                         
                        
                        </div>      
                        <div className="mt-5 ">
                                    <a href="" className="btn-aboutus">
                                        About us
                                    </a>
                                </div>               

                        

                    


                    </div>
                </div>
              </div>
          </section>
        </>
    );
};
export default Home;