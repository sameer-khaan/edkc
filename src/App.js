import React from "react";
import "./App.css";
import {Switch,Route ,Redirect} from "react-router-dom";
import Home from './home';
import About from './about';
import Contact from './contact';
import Signin from './signin';
import Signup from './signup';
import Login from './login';
import Adddog from './adddog';
import Addlitter from './addlitter';
import Forgetpassword from './forgetpassword';
import Footer from './footer';

function App() {
  return (
        <>        
          <Switch>
           <Route  exact path='/'  component={Home}/>
           <Route exact path='/About'  component={About}/>
           <Route exact path='/Contact'  component={Contact}/>
           <Route exact path='/Signin'  component={Signin}/>    
           <Route exact path='/Signup'  component={Signup}/> 
           <Route exact path='/Login'  component={Login}/> 
           <Route exact path='/Adddog'  component={Adddog}/>
           <Route exact path='/Addlitter'  component={Addlitter}/> 
           <Route exact path='/Forgetpassword'  component={Forgetpassword}/> 
          </Switch>
          <Footer/>
        </>
  );
}

export default App;
