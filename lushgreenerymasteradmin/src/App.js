import React from 'react';
//import Axios from "axios";
//import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Register from './components/register.js';
import Login from './components/login.js';
import Success from './components/success.js';
import Advisors from './components/advisors';
import {
  Button,

} from 'semantic-ui-react'
// import Profile from './components/profile.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/success" exact component={Success} />
          <div>
            <Navbar />
            <Route path="/advisors" exact component={Advisors} />

          </div>

        </Switch>

      </Router>



     




      </div>




    

  
  );
}

export default App;

