import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Allposts extends Component {
    constructor(props){
        super(props);
        console.log(props);
            this.state ={
                posts: null,
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


    handleVote(id){
        console.log('hi');
        axios.put('http://localhost:8000/api/post/vote/'+ id)
            .then(result => {
                window.location.href = "/"
            })
            .catch(error => console.log(error))

    }

    handleUnVote(id){
        console.log('hi');
        axios.put('http://localhost:8000/api/post/unvote/'+ id)
            .then(result => {
                window.location.href = "/"
            })
            .catch(error => console.log(error))

    }

    
    componentDidMount(){
        console.log(this.state);
        let _this= this;
        axios.get('http://localhost:8000/api/posts')
            .then(result => {
                _this.setState({
                    posts: result.data
                })
            })
            .catch(error =>console.log(error))
    }

         
    render() {
        return (
            <div>
                <br />
                <br />
                
                {this.state.posts
                ?
                <div>
                {this.state.posts.map(function(post){
                  
                            return(

                                <div key={post._id}>
                                    <h3 className="post">{post.text}</h3>
                                    <br />
                                    <ul>
                                    <li>Added by: {post.user}</li>
                                    <li>Number of Votes: {post.vote}</li>
                                    <li>Added on: {post.date}</li>
                                    </ul>
                                    {this.state.user && <button className="btn btn-success" onClick={this.handleVote.bind(this, post._id)}>Like</button>}
                                    {this.state.user &&  <button className="btn btn-warning" onClick={this.handleUnVote.bind(this, post._id)}>Un-Like</button>}
                                    {/* if there is a usersession show me the delete button for that user posts */}
                                    {this.state.user&&this.state.user._id===post.userID && <Link className="btn btn-danger" onClick={this.deletePost} to={'/deletepost/'+post._id}>Delete</Link>}
                                    <hr />
                                </div>  
                            )
                        }.bind(this))}
                </div>

                :
                <p>Sorry!!! There are no posts to display</p>
                }
            </div>
        );
    }
}

export default Allposts;