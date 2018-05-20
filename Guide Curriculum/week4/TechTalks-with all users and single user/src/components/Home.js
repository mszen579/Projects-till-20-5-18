//Home.js
import React, { Component } from "react";
import axios from "axios";
import Allposts from "./Allposts";
import { Link } from 'react-router-dom';//this is for routing

axios.defaults.withCredentials = true;// this is getting credentials

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        user:null,
        error:'Please Login'
    }
          

    axios.get('http://localhost:8000/api/currentuser')
    .then(function(result){
        console.log(result);
        this.setState({
            user: result.data,
            error: ''
        })
    }.bind(this))
    .catch(error => console.log(error))   
    
}

 render() {

   return (
     <div>
     <div className="header">
     <h1>Welcome to TechTalks!</h1>
     <h3>Read, Write and Share tech stories that matter...</h3>
     {this.state.user &&
     <Link className='btn nav-link btn-success' to='/Allusers'>
      show allusers
      </Link>}
     {!this.state.user &&
     <p>In order to write a TechTalk you need to login first</p>}

      {!this.state.user &&
      <Link className='btn nav-link btn-success' to='articles/join'>
      Log in/Register
      </Link>}
      </div>
     { this.state.user && <h1> Hello, {this.state.user.name}</h1> }
      {this.state.user &&
      <Link className='btn nav-link btn-danger' to='/articles/Logout'>
      Log out
      </Link>}
      <br />
      {this.state.user &&
    <Link className="btn nav-link btn-success" to="/articles/new">
    Write a TechTalks Post
    </Link>}
    <br />
    <h3>A Random TechTalks article for you to enjoy...</h3>
    <h3>See the latest articles</h3>
      <br />
        
     <Allposts />

     </div>
   );
 }
}