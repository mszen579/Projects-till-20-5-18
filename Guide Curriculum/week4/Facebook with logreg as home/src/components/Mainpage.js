import React, { Component } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import Posts from './Allposts';
import { Link} from 'react-router-dom';

axios.defaults.withCredentials = true;

class Mainpage extends Component {
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
        if(this.state.error === 'Wrong Credentials'){return <h3 className="text-danger"> You should login first!!!
        <br />
        <Link className='btn btn-success' to='/'>
                    Back to Login Page
        </Link>
        </h3>}
        return (
            <div>
                <h1> Hello, {this.state.user.name}</h1>
                <button className='btn nav-link btn-warning' onClick={this.handleLogout}>Logout</button>
                <br />
                <br />
                <br />
                <PostForm user={this.state.user}/>
                <Posts />
            </div>
        );
    }
}

export default Mainpage;