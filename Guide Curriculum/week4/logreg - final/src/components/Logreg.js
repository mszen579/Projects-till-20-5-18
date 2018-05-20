import React, { Component } from 'react'
import Login from '../components/Login';
import Register from '../components/Register';

export default class Logreg extends Component {
    render() {
        return (
            <div>
                <h1>FACEBOOK</h1>
                <Login history={this.props.history}/>
                <br />
                <hr />
                <Register />
            </div>
        )
    }
}
