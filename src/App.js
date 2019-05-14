import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import What from './components/What';
import Why from './components/Why';
import How from './components/How';
import Artists from './components/Artists';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <BrowserRouter>
      <div>
        <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/what" component={What} />
          <Route path="/why" component={Why} />
          <Route path="/how" component={How} />
          <Route path="/artists" component={Artists} />
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
