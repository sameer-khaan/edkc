import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import img32 from '../images/Vector (1).svg';
import Dog from './dog';
import Litter from './litter';
import img4 from '../images/Rectangle 44.svg';
import Myaccount from './myaccount';
import "./login.css";

const Login=()=> {
    const [active , setActive]=useState("myaccount");
    const btn1 = "#1f3059";
    const btn2 = "White";
    const btn3 = "White";
    const textcol1 = "white";
    const textcol2 = "black";
    const textcol3 = "black";
    const [bgcolor1,setbg1] = useState(btn1);
    const [bgcolor2,setbg2] = useState(btn2);
    const [bgcolor3,setbg3] = useState(btn3);
    const [image1,setimage1]=useState("visible");
    const [image2,setimage2]=useState("hidden");
    const [image3,setimage3]=useState("hidden");
    const [text1,settext1] = useState(textcol1);
    const [text2,settext2] = useState(textcol2);
    const [text3,settext3] = useState(textcol3);
    const changecolor=()=>{
        let btn4 = "#1f3059";
        let textcol5 = "white";
        let textcol6 = "#071841";
        let active1 = "myaccount";
        setActive(active1);
        setbg1(btn4);
        settext1(textcol5);
        setbg2(textcol5);
        settext2(textcol6);
        setbg3(textcol5);
        settext3(textcol6);    
        setimage1("visible");
        setimage2("hidden");
        setimage3("hidden");
    }
    const changecolor2=()=>{
        let btn4 = "#1f3059";
        let textcol5 = "white";
        let textcol6 = "#071841";
        let active1 = "litter";
        setActive(active1);
        setbg1(textcol5);
        settext1(textcol6);
        setbg2(btn4);
        settext2(textcol5);
        setbg3(textcol5);
        settext3(textcol6);  
        setimage1("hidden");
        setimage2("visible");
        setimage3("hidden");      
    }
    const changecolor3=()=>{
        let btn4 = "#1f3059";
        let textcol5 = "white";
        let textcol6 = "#071841";
        let active1 = "dog";
        setActive(active1);
        setbg1(textcol5);
        settext1(textcol6);
        setbg2(textcol5);
        settext2(textcol6);
        setbg3(btn4);
        settext3(textcol5); 
        setimage1("hidden");
        setimage2("hidden");
        setimage3("visible");       
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
                            <div className="col-lg-3 box5 box6 col-md-7 col-sm-10 col-10 d-flex flex-column ">                                   
                                <h5><img src={img32} alt ="img32"/>Name Surname</h5>
                                <p className="pl-4">abc@providename.com</p> 
                                <button style={{backgroundColor:bgcolor1}} className=" mt-2 btn-login d-flex " onClick={changecolor }><img style={{visibility:image1}} src={img4} /> <p style={{color:text1}}  className="dogline1"> My account</p></button> 
                                <button style={{backgroundColor:bgcolor2}} className=" mt-2 btn-login d-flex " onClick={changecolor2}><img style={{visibility:image2}} src={img4} /> <p style={{color:text2}}  className="dogline1"> Litters</p></button> 
                                <button style={{backgroundColor:bgcolor3}} className="mt-2 btn-login d-flex" onClick={changecolor3}><img style={{visibility:image3}} src={img4} /> <p style={{color:text3}} className="dogline1"> Dogs</p></button> 
                            </div>
                            <div className="col-lg-9 col-md-11 col-sm-10 col-10 ">
                                <div className="box5 boxofsign">
                                    <div className="row">
                                        <div className="col-11 col-lg-11 pl-lg-5 pl-2 justify-content-center ">
                                            {active ==="dog" && <Dog title="1" />}
                                            {active ==="litter" && <Litter title= "2"/>}
                                            {active ==="myaccount" && <Myaccount title= "3"/>}  
                                                                                                                   
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
export default Login;