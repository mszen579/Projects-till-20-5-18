import React, { Component } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import Posts from './Allposts';
import { Link} from 'react-router-dom';

axios.defaults.withCredentials = true;

class Home extends Component {
    constructor(props){
        super(props);
        this.state={

            user:{},
            error:'Wrong Credentials'
        }
    //to get the user session
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

    handleLogout(){
        axios.get('http://localhost:8000/api/logout')
            .then( result =>{
                window.location.href = '/';
            })
            .catch( error => console.log(error))
    }


    render() {

        return (
            <div>
                <h1>Facebook</h1>
                {this.state.user._id &&   
                <h1> Hello, {this.state.user.name}</h1>}
                {this.state.user._id && 
                <button className='btn nav-link btn-warning' onClick={this.handleLogout}>Logout</button>}
                {!this.state.user._id && 
                    <h2>
                    Please login to post below...
                    </h2>}
                {!this.state.user._id && 
                    <Link className='btn btn-success' to='/Logreg'>
                    Login
                    </Link>}
                <br />
                <br />
                <br />
                {this.state.user._id && 
                <PostForm user={this.state.user}/>}
                <Posts />
            </div>
        );
    }
}

export default Home;