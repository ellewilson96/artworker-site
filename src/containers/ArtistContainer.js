import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Brandon from '../components/artists/Brandon.js';
import Chris from '../components/artists/Chris.js';
import Dina from '../components/artists/Dina.js';
import Heidi from '../components/artists/Heidi.js';
import Jermain from '../components/artists/Jermain.js';
import Maya from '../components/artists/Maya.js';
import ArtistNav from '../components/ArtistNav.js'


class ArtistContainer extends Component {
    componentDidMount() {
    }
      render() {
        const ArtistContainer = () => (
          <div className="content">
                  <BrowserRouter>
                <div className="artist-container">
                <ArtistNav />
                  <Switch>
                    <Route path="/brandon" component={Brandon} />
                    <Route path="/chris" component={Chris} />
                    <Route path="/dina" component={Dina} />
                    <Route path="/heidi" component={Heidi} />
                    <Route path="/jermain" component={Jermain} />
                    <Route path="/maya" component={Maya} />
                  </Switch>
                </div>
                 </BrowserRouter>
              </div>
              )
            return (
              <BrowserRouter>
                <Switch>
                <ArtistContainer />
                </Switch>
                </BrowserRouter>
              )
            }
          }

export default ArtistContainer
