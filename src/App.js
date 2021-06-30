import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from './components/home/';
import About from './components/about/';
import Contact from './components/contact/';
import Signin from './components/signin/';
import Signup from './components/signup/';
import Forgetpassword from './components/forgetpassword/';
import Dashboard from './components/account/';
import Dogs from './components/account/dogs/';
import Adddog from './components/account/dogs/new';
import Litters from './components/account/litters/new';
import Addlitter from './components/account/litters';
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
              <Route  exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/signin' component={Signin}/>    
              <Route exact path='/signup' component={Signup}/> 
              <Route exact path='/forgetpassword' component={Forgetpassword}/>
              <Route exact path='/dashboard' component={Dashboard}/> 
              <Route exact path='/dogs' component={Dogs}/>
              <Route exact path='/adddog' component={Adddog}/>
              <Route exact path='/litters' component={Litters}/> 
              <Route exact path='/addlitter' component={Addlitter}/>
            </Switch>
            </div>
          </div>
          <Footer/>
        </>
  );
}

export default App;
