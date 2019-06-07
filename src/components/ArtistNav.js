import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class ArtistNav extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="link-container">
            <nav>
            <div className="artist-links">
               <ul>
                   <li><NavLink to="/brandon">Brandon Sines</NavLink></li>
                   <li><NavLink to="/chris">Chris Rocket</NavLink></li>
                   <li><NavLink to="/dina">Dina Jordan</NavLink></li>
                   <li><NavLink to="/heidi">Heidi Hankaniemi</NavLink></li>
                   <li><NavLink to="/jermain">Jermain Miller</NavLink></li>
                   <li><NavLink to="/maya">Maya Varadaraj</NavLink></li>
                 </ul>
                </div>
               </nav>
             </div>
           )
         }
       }

 export default ArtistNav
