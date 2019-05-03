import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter className= "browser">
              <div className="navBar">
                <NavLink exact to="/" className= "tabLike" activeClassName="selected"> Home </NavLink>
                <NavLink to="/contact-us" className= "tabLike" activeClassName="selected"> Contact </NavLink>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/contact-us" component={Contact} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;