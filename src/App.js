import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/Home';
import Organization from './pages/Organization';
import Organizations from './pages/Organizations';
import UserProfile from './pages/UserProfile';

import Header from './ui-components/Header';

import './App.scss'

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/organization'>
        <Organization/>
      </Route>
      <Route path='/organizations'>
        <Organizations/>
      </Route>
      <Route path='/UserProfile'>
        <UserProfile/>
      </Route>
    </Router>
  );
}

export default App;
