import React, { Component } from 'react';
import '../styles/NavBar.css'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
render() {
    return (
      <div>
        <header>
        <h1><NavLink to="/">ArtWorker</NavLink></h1>
        <h2>Introducing artists into your workspace</h2>
          <nav>
          <div className="links">
             <ul>
               <li><NavLink to="/what">What we do</NavLink></li>
               <li><NavLink to="/why">Why we do it</NavLink></li>
               <li><NavLink to="/who">Who we are</NavLink></li>
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
