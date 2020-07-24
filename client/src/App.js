import React from 'react';
import logo from './logo.svg';
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Post from './components/Post'
import Search from './components/Search'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
   <div>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/post" component={Post} />
      <Route path="/search" component={Search} />
    </div>
    </Router>
  );
}

export default App;
