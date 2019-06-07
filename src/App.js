import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import How from './components/How';
import Benefits from './components/Benefits';
import ArtistContainer from './containers/ArtistContainer';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    const App = () => (
      <div className="app">
        <BrowserRouter>
      <div className="page-container">
        <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/how" component={How} />
          <Route path="/benefits" component={Benefits} />
          <Route path="/artists" component={ArtistContainer} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <footer>
        <div className="footer">
          built by elle wilson
        </div>
      </footer>
      </div>
       </BrowserRouter>
      </div>
    )
  return (
    <BrowserRouter>
      <Switch>
      <App />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
