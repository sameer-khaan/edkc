import React from 'react';
import { NavLink } from 'react-router-dom';
import rect1 from '../images/Rectangle 32.svg';
import img from '../images/arrowup.svg';
import Male from '../images/male.svg';
import female from '../images/female.svg';
import Fb1  from '../images/akar-icons_facebook-fill.svg';

const Myaccount=()=> {
    return (
        <>
        <div>
        <center> <h3 className="justify-content-center">My account</h3></center>
            <div>
                <div className="row  row2">
                    <div className="col-lg-11 col-md-8 col-10  d-flex ">
                        <img src={rect1} alt="sideimg" className=""/>
                        <div className="d-flex flex-column text"> 
                           <h5> name</h5>
                            <p><img src={female} alt="female"/> Female     <img src={Male} alt="Male"/> Male</p>
                            <p> Lorem ipsum dolor sit amet, t</p>
                        </div>
                                
                    </div>
                   
                   
                </div>  
                                  
            </div>
        </div>
                            
        </>
    );
};
export default Myaccount;