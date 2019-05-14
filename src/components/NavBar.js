import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

class NavBar extends Component {
render() {
    return (
      <div>
        <header>
        <div className="title"><NavLink to="/">ArtWorker</NavLink></div>
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
