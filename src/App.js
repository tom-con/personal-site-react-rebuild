import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import LayoutRoute from './Components/Layout/LayoutRoute'
import Menu from './Components/Navbar/MenuContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <LayoutRoute 
          exact path='/'
          component={() => <span>Hi</span> }
        />
      </Router>
    );
  }
}

export default App;
