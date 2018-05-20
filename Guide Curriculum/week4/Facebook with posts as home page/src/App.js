import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Deletepost from './components/Deletepost';
import Logreg from './components/Logreg';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/logreg' component={Logreg} />
                    <Route path='/deletepost/:id' component={Deletepost} />
                    
                    <Route render={function(){
                    return (
                    <p> Not Found
                    <br />
                    <Link className='btn nav-link btn-success' to='/'>
                    Home
                    </Link>
                    </p>
                    )
                    }} />
                </Switch>
            </Router>
        );
    }
}

export default App;