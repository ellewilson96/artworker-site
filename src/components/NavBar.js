import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../logo.jpg'

class NavBar extends Component {
render() {
    return (
      <div>
        <header>
        <img src={logo} className="page-logo" alt="art worker" />
        <h2>Introducing artists into your workspace</h2>
          <nav>
          <div className="links">
             <ul>
               <li><NavLink to="/what">What we do</NavLink></li>
               <li><NavLink to="/why">Why we do it</NavLink></li>
               <li><NavLink to="/how">How it Works</NavLink></li>
               <li><NavLink to="/artists">Our Artists</NavLink></li>
               <li><NavLink to="/contact">Get involved</NavLink></li>
             </ul>
             </div>
        </nav>
       </header>
      </div>
    )
}
}

export default NavBar;
