import React from "react";
import "./App.css";
import {Switch,Route ,Redirect} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Contact from './Contactus';
import Signin from './Signin';
import Signup from './signup';
import login from './login';
import Adddog from './adddog';
import Addlitter from './addlitter';
import Footer from './footer';

function App() {
  return (
        <>        
          <Switch>
           <Route  exact path='/'  component={Home}/>
           <Route exact path='/About'  component={About}/>
           <Route exact path='/Contactus'  component={Contact}/>       
           <Route exact path='/Signin'  component={Signin}/>    
           <Route exact path='/Signup'  component={Signup}/> 
           <Route exact path='/Login'  component={login}/> 
           <Route exact path='/Adddog'  component={Adddog}/>
           <Route exact path='/Addlitter'  component={Addlitter}/> 
          </Switch>
          <Footer/>
        </>
  );
}

export default App;
