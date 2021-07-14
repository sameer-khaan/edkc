import React, { useState } from 'react';

const Home=()=> {
    const [hide1,sethide1]= useState("hide");
    const[visi1,setvisi1]  = useState("hidden");
    const[dis1,setdis1]= useState("none");
    const[border1,setborder1]=useState("0px #FECC00 solid");
    const [hide2,sethide2]= useState("hide");
    const[visi2,setvisi2]  = useState("hidden");
    const[dis2,setdis2]= useState("none");
    const[border2,setborder2]=useState("0px #FECC00 solid");
    const [hide3,sethide3]= useState("hide");
    const[visi3,setvisi3]  = useState("hidden");
    const[dis3,setdis3]= useState("none");
    const[border3,setborder3]=useState("0px #FECC00 solid");
    const [hide4,sethide4]= useState("hide");
    const[visi4,setvisi4]  = useState("hidden");
    const[dis4,setdis4]= useState("none");
    const[border4,setborder4]=useState("0px #FECC00 solid");
    const [hide5,sethide5]= useState("hide");
    const[visi5,setvisi5]  = useState("hidden");
    const[dis5,setdis5]= useState("none");
    const[border5,setborder5]=useState("0px #FECC00 solid");
    const [hide6,sethide6]= useState("hide");
    const[visi6,setvisi6]  = useState("hidden");
    const[dis6,setdis6]= useState("none");
    const[border6,setborder6]=useState("0px #FECC00 solid");
    const hidetext1=()=>{
        if(hide1== "hide"){
            sethide1("show");
            setvisi1("visible");
            setdis1("inline");
            setborder1("4px #FECC00 solid");
        }
        else{
            setvisi1("hidden");
            setdis1("none");
            sethide1("hide");
            setborder1("0px #FECC00 solid");
        }
    }
    const hidetext2=()=>{
        if(hide2== "hide"){
            sethide2("show");
            setvisi2("visible");
            setdis2("inline");
            setborder2("4px #FECC00 solid");
        }
        else{
            setvisi2("hidden");
            setdis2("none");
            sethide2("hide");
            setborder2("0px #FECC00 solid");
        }
    }
    const hidetext3=()=>{
        if(hide3== "hide"){
            sethide3("show");
            setvisi3("visible");
            setdis3("inline");
            setborder3("4px #FECC00 solid");
        }
        else{
            setvisi3("hidden");
            setdis3("none");
            sethide3("hide");
            setborder3("0px #FECC00 solid");
        }
    }
    const hidetext4=()=>{
        if(hide4== "hide"){
            sethide4("show");
            setvisi4("visible");
            setdis4("inline");
            setborder4("4px #FECC00 solid");
        }
        else{
            setvisi4("hidden");
            setdis4("none");
            sethide4("hide");
            setborder4("0px #FECC00 solid");
        }
    }
    const hidetext5=()=>{
        if(hide5== "hide"){
            sethide5("show");
            setvisi5("visible");
            setdis5("inline");
            setborder5("4px #FECC00 solid");
        }
        else{
            setvisi5("hidden");
            setdis5("none");
            sethide5("hide");
            setborder5("0px #FECC00 solid");
        }
    }
    const hidetext6=()=>{
        if(hide6== "hide"){
            sethide6("show");
            setvisi6("visible");
            setdis6("inline");
            setborder6("4px #FECC00 solid");
        }
        else{
            setvisi6("hidden");
            setdis6("none");
            sethide6("hide");
            setborder6("0px #FECC00 solid");
        }
    }
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
                                <button style={{borderLeft:border1}} className="btn-puppy" onClick={hidetext1}>
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>
                                    </button>
                                    <p style={{visibility:visi1,display:dis1}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>  
                                <div className="infobox">
                                    <button style={{borderLeft:border2}} className="btn-puppy" onClick={hidetext2}>
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>
                                   
                                    </button>
                                    <p style={{visibility:visi2,display:dis2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>   
                                <div className="infobox">
                                    <button style={{borderLeft:border3}} className="btn-puppy" onClick={hidetext3}>
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>
                                    </button>
                                    <p style={{visibility:visi3,display:dis3}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>                                
                            </div>                            
                            
                            <div className=" col-lg-6 col-md-8 col-10  col2 d-flex flex-column">
                                
                            <div className="infobox2">
                            <button style={{borderLeft:border4}} className="btn-puppy" onClick={hidetext4}>
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>
                                </button>
                                    <p style={{visibility:visi4,display:dis4}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>  
                                <div className="infobox2">
                                <button style={{borderLeft:border5}} className="btn-puppy" onClick={hidetext5}>
                                    <h6 > I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>
                                    </button>
                                    <p style={{visibility:visi5,display:dis5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>  
                                <div className="infobox2">
                                <button style={{borderLeft:border6}} className="btn-puppy" onClick={hidetext6}>
                                    <h6>I have bought a puppy, but wasn't given any pedigree history, can i get one with you? </h6>
                                   </button>
                                    <p style={{visibility:visi6,display:dis6}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>                         
                            </div>                  
                        </div>

                        <div className="my-4 faq justify-content-center align-center px-4">
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