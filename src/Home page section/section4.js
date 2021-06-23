import React from 'react';
import './homesection.css';
import rect from '../images/Vector.svg';
import rect1 from '../images/Rectangle 32.svg';
import rect2 from '../images/Group 3.svg';
import rect3 from '../images/Mask Group.svg';
import rect4 from '../images/Rectangle 34.svg';

const Home=()=> {
    return (
        <>
            <section id="header" className=" align-items-center justify-content-center mx-auto ">
              <div className="container-fluid  cards2">
                <div className="row justify-content-center">
                    <div className="col-lg-10  col-md-10  mx-auto">
                    <h2 className="heading3  mx-auto">Register a dog</h2>
                        <div className="row row2 justify-content-center ">
                            <div className="col-lg-6 col-md-8 col-10 arrowcol  order-2  order-lg-1 mx-auto">
                                <img src={rect} alt="sideimg" className=""/>                                
                            </div>
                            
                            
                            <div className=" col-lg-6 col-md-8 col-10 coltext d-flex order-1 order-lg-2">
                                <img src={rect1} alt="sideimg" className=""/>
                                <div className="d-flex flex-column text">
                                    <h4>Sign up to EDKC for free</h4>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>

                                
                            </div>          
                         
                        
                        </div>
                        <br/>

                        <div className="row  row2">
                            <div className="col-lg-6 col-md-8 col-10  d-flex order-1 order-lg-1">
                            <img src={rect1} alt="sideimg" className=""/>
                                <div className="d-flex flex-column text">
                                     
                                    <h4>Register dogs and litters</h4>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                
                            </div>
                            
                           
                            <div className="col-lg-6 col-md-8 col-10 arrowcol2 coltext order-2 order-lg-2">
                                <img src={rect2} alt="sideimg" className=""/>
                               
                            </div>
                         
                        
                        </div>                        

                        <div className="row row2 ">
                            <div className="col-lg-3 col-md-8 col-10 imgcol  order-2 order-lg-1 ">
                                <img src={rect3} alt="sideimg" className="dogsimg"/>
                            </div>
                           
                         
                           
                            
                            <div className="col-lg-9 col-md-8 col-10 order-1 order-lg-2 ">
                                <div className="box d-flex  ">
                                    <img src={rect4} alt="sideimg" className="img3"/>
                                    <div className="d-flex flex-column text">                                     
                                        <h4>Receive your documents </h4>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                
                                </div>
                                <div className="mt-5 btnimp">
                                    <a href="" className="btn-get-started">
                                        Register dogs
                                    </a>
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
export default Home;