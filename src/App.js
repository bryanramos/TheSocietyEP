import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// pages
import Vendors from './pages/Vendors';
import Home from './pages/Home';

// components
import Navigation from './components/Navigation';

export default class App extends Component {

  render() {

    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Switch>
                    <Route path="/vendors">
                        <Vendors/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
      
    );
  }  

  
}
