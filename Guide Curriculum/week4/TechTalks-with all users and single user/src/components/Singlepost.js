//Singlepost.js
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';
// import dateFormat from 'dateFormat';
var now = new Date();




function Detail(props) {
    var data= props.postData;
    return(
         <div className="card">
                <br />
                <div className="card-body">
                    <h1 className="singlepost">{data.title}</h1>
                    <p className="card-text"><b>Description: </b><br />  {data.desc}</p>
                    <p className="card-text"><b>Summary: </b> <br /> {data.summary}</p>
                    <p className="header"><b>The author marked this article with the following keywords:</b><br />  {data.keyword}</p>
                    <img src={data.img} alt="msz" />
                     <p className="card-text"><b>Added by: </b> {data.user.name}</p>
                     <p className="card-text"><b>Listed on: </b> {data.createdat}</p>
                     <hr />
                    <Link className='btn btn-primary' to={'/'}>Back to TechTalks Articles</Link>
                    
                </div>
            </div>
    )
 }
 
 class Singlepost extends Component {
    constructor(props) {
        super(props);
        this.state={
            postinfo:null
        }
        axios.get('http://localhost:8000/api/post/'+this.props.match.params._id)
        .then((res)=>this.setState({postinfo:res.data}))
        this.deletePost = this.deletePost.bind(this);
    }

    //deleting post
    deletePost(event){
        event.preventDefault();
        let _this =this;
        axios.delete("http://localhost:8000/api/deletepost/"+this.props.match.params._id)
        .then(function (response) {
          _this.setState({user: null})
        })
        .catch(function (error) {
          console.log(error);
        })
        window.location.href = "/";
    }
 
    render() {
        return (
            <div>
            {this.state.postinfo && <Detail postData={this.state.postinfo} />}
            <br />
            </div>
        );
    }
 }
 
 export default Singlepost;