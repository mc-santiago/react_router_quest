import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter className= "browser">
              <div className="navBar">
                <NavLink exact to="/" className= "tabLike" activeClassName="selected"> Home </NavLink>
                <NavLink to="/our-story" className= "tabLike" activeClassName="selected"> History </NavLink>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/our-story" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;