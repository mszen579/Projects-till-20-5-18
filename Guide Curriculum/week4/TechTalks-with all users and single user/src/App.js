//App.js
import React, { Component } from 'react';
import './index.css';
import Logreg from './components/Logreg';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";//this is for routing
import Home from './components/Home';
import Newlisting from './components/Newlisting';
import Singlepost from './components/Singlepost';
import Logout from './components/Logout';
import Allusers from './components/Allusers';
import Singleuser from './components/Singleuser';
class App extends Component {
  render() {
    return (
      <div className="App">
            <Router>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/articles/join' component={Logreg} />
            <Route path='/articles/post/:_id' component={Singlepost} />
            <Route path='/Allusers' component={Allusers} />
            <Route path='/user' component={Singleuser} />
            <Route path='/articles/new' component={Newlisting} />
            <Route path='/articles/Logout' component={Logout} />
            <Route render={function(){
                return (
                <p> Not Found
                <br />
                      <Link className='btn nav-link btn-success' to='/'>
                      Back to log and Reg
                      </Link>
                </p>
                )
            }} />
            </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
