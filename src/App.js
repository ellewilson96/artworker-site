import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import What from './components/What';
import Why from './components/Why';
import Who from './components/Who';
import Artists from './components/Artists';
import Contact from './components/Contact';

import './App.css';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <BrowserRouter>
      <div>
        <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/what" component={What} />
          <Route path="/why" component={Why} />
          <Route path="/who" component={Who} />
          <Route path="/artists" component={Artists} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <footer>
        <div>
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
