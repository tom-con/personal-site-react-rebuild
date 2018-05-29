import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-alice';
import './css/App.css';
import LayoutRoute from './Components/Layout/LayoutRoute';
import Landing from './Components/Landing/LandingContainer';

const App = () => (
  <Router>
    <LayoutRoute
      exact
      path="/"
      component={() => <Landing />}
      classes="home"
    />
  </Router>
);

export default App;
