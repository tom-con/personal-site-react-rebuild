import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-alice';
import './css/App.css';
import LayoutRoute from './Components/Layout/LayoutRoute';
import Landing from './Components/Landing/LandingContainer';
import Construction from './Components/Construction/ConstructionContainer';

const App = () => (
  <Router>
    <Switch>
      <LayoutRoute
        exact
        path="/"
        component={() => <Landing />}
      />
      <LayoutRoute
        path="/*"
        component={() => <Construction />}
      />
    </Switch>
  </Router>
);

export default App;
