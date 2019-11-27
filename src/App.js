import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './containers/Nav';
import MainContainer from './containers/MainContainer';
import PropertiesContainer from './containers/PropertiesContainer';
import ProfileContainer from './containers/ProfileContainer';
import AccountingContainer from './containers/AccountingContainer';

// Only routing here. Each page renders a container along with the Nav, detailed below.
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/properties'>
          <Properties />
        </Route>
        <Route path='/accounting'>
          <Accounting />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

// Containers
function Dashboard() {
  return (
    <div className='App'>
      <Nav />
      <MainContainer />
    </div>
  );
}

function Properties() {
  return (
    <div className='App Properties'>
      <Nav />
      <PropertiesContainer />
    </div>
  );
}

function Accounting() {
  return (
    <div className='App Accounting'>
      <Nav />
      <AccountingContainer />
    </div>
  );
}

function Profile() {
  return (
    <div className='App Profile'>
      <Nav />
      <ProfileContainer />
    </div>
  );
}
