import React , {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import img from '../images/back arrow.svg';
import "./login.css";
import img32 from '../images/Vector (1).svg';
const Addlitter=()=> {
    const history = useHistory();
    console.log(history);
    const [bgcolor1,setbg1] = useState("white");
    const [bgcolor2,setbg2] = useState("#1f3059");
    const [bgcolor3,setbg3] = useState("white");
    const [text1,settext1] = useState("#071841");
    const [text2,settext2] = useState("White");
    const [text3,settext3] = useState("#071841");
    return (
        <>
        <section id="header" className=" ">
              <div className="container-fluid  ">
                <div className="row  justify-content-center">
                    <div className="col-lg-10 col-md-10 ">                        
                        <br/>
                        <br/>
                        <div className="row ">
                            <div className="col-lg-3 box5 box6 pl-4 pt-5 col-md-7 col-sm-10 col-10 d-flex flex-column ">                                   
                                <h5><img src={img32} alt ="img32"/>Name Surname</h5>
                                <p className="pl-4">abc@gmail.com</p> 
                                <NavLink to='./Login'><button style={{backgroundColor:bgcolor1,color:text1}} className="btn mt-2 btn-login">My account</button> </NavLink>
                                <NavLink to='./Login'><button style={{backgroundColor:bgcolor2,color:text2}} className="btn mt-2 btn-login">Litters</button> </NavLink>
                                <NavLink to='./Login'><button style={{backgroundColor:bgcolor3,color:text3}} className="btn mt-2 btn-login">Dogs</button> </NavLink> 
                            </div>
                            <div className="col-lg-9 col-md-11 pl-0 pl-xl-5  col-sm-10 col-10 ">
                                <div className="box5 boxofsign">
                                    <div className="row pl-3 pt-3">
                                        <div className="col-11 col-lg-11  ">
                                            <div className="row">
                                                <div className="col-lg-1  col-1">
                                                    <button className="btn-arrow" onClick={()=>history.goBack()}><img src={img} alt="arrowup"/></button>
                                                </div>
                                                <div className="col-lg-11 col-md-8 col-10  ">  
                                                    <center> <h5>Add new Litter </h5>  </center>                          
                                                                    
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
export default Addlitter;