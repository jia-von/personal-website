import './App.css';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home/Home.js";
import Stuff from "./Stuff/Stuff.js";
import Contact from "./Contact/Contact.js";
import "./index.css";

function App() {
  return (
    <HashRouter>
    <nav>
    <ul className="header">
    <input className ="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/stuff">Stuff</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/stuff" component={Stuff}/>
        <Route path="/contact" component={Contact}/>
    </div>
    </nav>
    </HashRouter>
  );
}

export default App;
