import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Mainpage from './components/Mainpage';
import Deletepost from './components/Deletepost';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/mainpage' component={Mainpage} />
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