//Allposts.js
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Result(props) {
    return (
        props.posts.map((post)=>{
            return(
                <div>
                <div className="header">
                <ul className='users' key={post._id}>
                <div className="card-body">
                    <h2 className="card-title">Title: {post.title}</h2>
                    <h4 className="card-text">Add on: {post.createdat}</h4>
                    
                    <Link className='btn btn-primary' to={'/articles/post/'+post._id}>Post Details</Link>
                    <hr />
                </div>
                </ul>
                </div>
                <br />
                </div>
            )
        })
    )
}

class Allposts extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:null
        }
        
    }
    componentDidMount(){
        axios.get('http://localhost:8000/api/Allposts/')
        .then((res)=>this.setState({posts:res.data})) 
        
    }
  

 

    render() {
        return (
            <div>
            {this.state.posts && <Result posts ={this.state.posts} />}
            
            </div>
        );
    }
}

export default Allposts;