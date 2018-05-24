import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import LayoutRoute from '../Components/Layout/LayoutRoute';

const App = () => (
  <Router>
    <LayoutRoute
      exact
      path="/"
      component={() => <span>Hi</span>}
    />
  </Router>
);

export default App;
