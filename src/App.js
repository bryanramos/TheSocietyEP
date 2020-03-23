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
import Contact from './pages/Contact';

// components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default class App extends Component {

  render() {

    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/vendors" component={Vendors} />
                </Switch>
                <Footer/>
            </div>
        </Router>
      
    );
  }  

  
}
