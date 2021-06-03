import React from 'react';
import classes from './App.module.css';

//react router
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

function App(props) {
  return (
    <Router>
      <div className={classes.App}>
        <Layout />
      </div>
    </Router>
    
  );
}

export default App;
