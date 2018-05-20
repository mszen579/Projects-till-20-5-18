import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";//this is for routing
import './index.css';
import Logreg from './components/Logreg';
import Mainpage from './components/Mainpage';


class App extends Component {
  render() {
    return (
      <div className="App">
            <Router>
            <Switch>
            <Route exact path='/' component={Logreg} />
            <Route exact path='/Mainpage' component={Mainpage} />
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
