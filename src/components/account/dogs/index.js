import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../sidebar';
import rect1 from '../../../images/Rectangle 32.svg';
import Male from '../../../images/male.svg';
import img from '../../../images/arrowup.svg';
import img1 from '../../../images/arrow down.svg';
import female from '../../../images/female.svg';

const Dog=()=> {
    const [heg ,setheg] = useState("200px");
    const [visi2 ,setvisi2] = useState("hidden");
    const [visi1 ,setvisi1] = useState("visible");

    const changeheight1=()=>{
        let hegi = "400px";
        setheg(hegi);
        let vivib = "hidden";
        setvisi1(vivib);
        let vivib1 = "visible";
        setvisi2(vivib1);
    }

    const changeheight2=()=>{
        let hegi = "200px";
        setheg(hegi);
        let vivib = "visible";
        setvisi1(vivib);
        let vivib1 = "hidden";
        setvisi2(vivib1);
    }
    
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
                            <Sidebar page="dog"/>
                            <div className="col-lg-9 col-md-10 col-sm-11 col-11">
                                <div className="box5 boxofsign">
                                    <div className="row">
                                        <div className="col-11 col-lg-11 pl-lg-5 pl-2 justify-content-center ">
                                            <center><h3 className="justify-content-center">Dogs</h3></center>
                                            <div>
                                                <div style={{height:heg}} className="row  row2 row4">
                                                    <div className="col-lg-11 col-md-8 col-10  d-flex ">
                                                        <img className="img8" src={rect1} alt="sideimg"/>
                                                        <div className="d-flex flex-column text"> 
                                                            <h5>Dog name</h5>
                                                            <p>
                                                                <img src={female} alt="female"/> Female    
                                                                <img src={Male} alt="Male"/> Male
                                                            </p>
                                                            <p> Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-1  col-1">
                                                        <button  style={{visibility:visi1}} className="btn-arrow" onClick={changeheight1}><img src={img} alt="arrowup"/></button>
                                                        <button style={{visibility:visi2}} onClick={changeheight2} className="btn-arrow"><img src={img1} alt="arrowdown"/></button>
                                                    </div>
                                                    <hr/>
                                                </div>  
                                                <div className="row  pt-3">
                                                    <div className="col-12">
                                                        <NavLink className="btn btn-add" to='./adddog'> New dog</NavLink>
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
export default Dog;
