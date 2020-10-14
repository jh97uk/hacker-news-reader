import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';

import Main from './Main.js';

class App extends Component{
  constructor(){
    super();
    axios.defaults.baseURL = "https://hacker-news.firebaseio.com/v0/";
  }

  render(){
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" render={(props)=><Main {...props}/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
