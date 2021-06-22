import React from "react";

import "./App.css";
import {Switch,Route ,Redirect} from "react-router-dom";
import Navbar  from "./Navbar";
import Home from "./Home";
import Footer from './footer';

function App() {
  return (
        <>
          <Navbar/>
          <Switch>
           <Route  path='/'  component={Home}/>
           
          </Switch>
          <Footer/>
        </>
  );
}

export default App;
