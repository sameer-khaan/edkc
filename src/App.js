import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from './components/home/';
import About from './components/about/';
import Contact from './components/contact/';
import Signin from './components/signin/';
import Signup from './components/signup/';
import Login from './components/account/';
import Adddog from './components/dogs/';
import Addlitter from './components/litters/';
import Forgetpassword from './components/forgetpassword/';
import Navbar from './assets/Navbar';
import Footer from './assets/footer';
import "./App.css";
import './assets/style.css';

function App() {
  return (
        <>
          <div className="container-fluid back">
            <div className="col-lg-12 col-12 back1">
            <Navbar/>
            <Switch>
              <Route  exact path='/'  component={Home}/>
              <Route exact path='/about'  component={About}/>
              <Route exact path='/contact'  component={Contact}/>
              <Route exact path='/signin'  component={Signin}/>    
              <Route exact path='/signup'  component={Signup}/> 
              <Route exact path='/login'  component={Login}/> 
              <Route exact path='/adddog'  component={Adddog}/>
              <Route exact path='/addlitter'  component={Addlitter}/> 
              <Route exact path='/forgetpassword'  component={Forgetpassword}/>
            </Switch>
            </div>
          </div>
          <Footer/>
        </>
  );
}

export default App;
