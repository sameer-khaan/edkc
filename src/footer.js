import React from 'react';
import './footer.css';


const Home=()=> {
    return (
        <>
            <section id="header" className="align-items-center footer1">
              <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-9 col-md-10 col-lg-10  mx-auto">
                        <div className="row pt-5 mx-auto rowfooter">
                            <div className="col-lg-4 col-md-12">
                                <div className="d-flex flex-column  column3">
                                    <h1 className="logoheading">EDKC</h1>
                                    <p className="logoheading1">European Dog Kennel Club</p>
                                </div>
                                
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="d-flex flex-column column3 ">
                                    <h4 className="footerheading">About</h4>
                                    <p>About us</p>
                                    <p>Terms and conditions</p>
                                    <p>Privacy policy</p>
                                    
                                </div>
                                

                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="d-flex flex-column column3 ">
                                    <h4  className="footerheading">Manage</h4>
                                    <p>Login</p>
                                    <p>Contact us</p>
                                </div>
                                

                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="d-flex flex-column column3 ">
                                    <h4  className="footerheading">Register</h4>
                                    <p>Create an account</p>
                                    <p>Registar a dog</p>
                                    <p>Registar a litter</p>                                    
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
                                <p>Company number:12345678</p>
                            </div>                            
                        </div>
                        <div className="row"> 
                            <div className="col-12 col-lg-10 column3">
                                <p>Registar address:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
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
export default Home;