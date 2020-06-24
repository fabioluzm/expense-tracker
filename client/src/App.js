import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { Login } from './components/auth/Login';
import { Resgistration } from './components/auth/Registration';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <GlobalProvider>      
        {/* <Link to="/">
          <Login />
        </Link>
        <Link to="/signup">
          <Resgistration />
        </Link>
        <Link to="/dashboard">
          <Dashboard />
        </Link> */}

        <Switch>
          <Route path="/signup">
            <Resgistration />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>

      </GlobalProvider>
  </Router>
  );
}

export default App;
