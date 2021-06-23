import React from "react";
import "./App.css";
import {Switch,Route ,Redirect} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Contact from './Contactus';
import Signin from './Signin';

import Footer from './footer';

function App() {
  return (
        <>        
          <Switch>
           <Route  exact path='/'  component={Home}/>
           <Route exact path='/About'  component={About}/>
           <Route exact path='/Contactus'  component={Contact}/>       
           <Route exact path='/Signin'  component={Signin}/>    
          </Switch>
          <Footer/>
        </>
  );
}

export default App;
