import React  from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import phone from '../images/phone.svg';
import logo from '../images/logo.svg';
import "./navbar.css";

const BurgerMenu = styled.div`

  z-index: 99999;
  display: block;
  position: ${props => (props.on ? "absolute" : "fixed")};
  top: 52px;
  right: 40px;

  label{
    display:flex;
    flex-direction:column;
    width:44px;
    cursor:pointer;
  }

  label span{
    background: #ffffff;
    border-radius:10px;
    height: 4px;
    margin: 3px 0;
    transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  span:nth-of-type(1){
    transform-origin: ${props => props.on ? 'initial' : 'bottom'};
    width: ${props => props.on ? '50%' : '40%'};
    transform: ${props => props.on ? 'rotate(0)' : 'rotatez(45deg) translate(6px,3px)'};
  }

  span:nth-of-type(2){
    transform-origin: ${props => props.on ? 'initial' : 'top'};
    width: ${props => props.on ? '100%' : '78%'};
    transform: ${props => props.on ? 'rotate(0)' : 'rotatez(-45deg) translate(-3px,1px)'};
  }

  span:nth-of-type(3){
    transform-origin: ${props => props.on ? 'initial' : 'bottom'};
    width: ${props => props.on ? '75%' : '40%'};
    transform: ${props => props.on ? 'rotate(0)' : 'rotatez(45deg) translate(8px,-11px)'};
  }

  @media (max-width: 1314px) {
    label span{
      background: ${props => props.on ? '#46545b' : '#ffffff'};
    }
  }
`;

const Navbar=()=>{
    return(
        <>
        <nav className="col-lg-10 col-md-10 mx-auto navbar navbar-expand-lg navbar-light ">
          <div className="d-flex LOGO flex-column">
            <NavLink className="nav-link pl-0 ml-0" to = "/">
              <img src={logo}/>
            </NavLink>
          </div>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <label for="check" className="burgerMenu">
              <input type="checkbox" id="check"/> 
              <span></span>
              <span></span>
              <span></span>
            </label>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav move ml-auto">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/"><img src={phone}/>  0123456789 </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dogs">Register Dogs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">Contact</NavLink>
              </li>
              <form className="form my-2 my-lg-0">
                <NavLink className="btn my-0 my-sm-0" to="/signin">Login</NavLink>
              </form>
            </ul>
          </div>
        </nav>
        </>
    );
};
export default Navbar;