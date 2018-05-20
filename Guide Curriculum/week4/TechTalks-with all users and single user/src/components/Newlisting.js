//Newlising.js
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";//this is for routing




export default class Newlising extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      data: {
        title: "",
        desc: "",
        summary: "",
        keyword: "",
      
      },
      error: {
        
        title: "",
        desc: "",
        summary: "",
        keyword: "",
        
      },
      success: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  getCurrentUser(){
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


  handleChange(element) {
    var formData = this.state.data;
    formData[element.target.name] = element.target.value;
    this.setState({
      data: formData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    let _this = this;
    axios
      .post("http://localhost:8000/api/postlist", this.state.data)
      .then(res => {
        console.log("res", res);
        if (res.data.errors) {
          let mainErrors = res.data.errors;
          let err_msg = {
            title: mainErrors.title ? mainErrors.title.msg : "",
            desc: mainErrors.desc ? mainErrors.desc.msg : "",
            summary: mainErrors.summary ? mainErrors.summary.msg : "",
            keyword: mainErrors.keyword ? mainErrors.keyword.msg : "",
          
          };
          _this.setState({
            error: err_msg,
            success: ""
          });
        } else {
          _this.setState({
           
            data: {
              title: "",
              desc: "",
              summary: "",
              keyword: "",
           
            },
            error: {
             
              title: "",
              desc: "",
              summary: "",
              keyword: "",
            
            },
            success: "Thank you for posting item"
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Link className='btn btn-success' to={'/'}>Home Page</Link>
        <br />
        <h1>Write a TechTalk</h1>
        <h3>Let's create your articel!</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputname">Title</label>
            <input
              type="text"
              name="title"
              value={this.state.data.title}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputtitle"
              placeholder="Title"
            />
            <h3 className="text-danger">{this.state.error.title}</h3>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tell your story</label>
            <textarea
              type="text"
              name="desc"
              value={this.state.data.desc}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputdesc"
              placeholder="Tell your story"
            />
            <h3 className="text-danger">{this.state.error.desc}</h3>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputname">summary</label>
            <input
              type="text"
              name="summary"
              value={this.state.data.summary}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputjobsummary"
              placeholder="summary"
            />
            <h3 className="text-danger">{this.state.error.summary}</h3>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputkeyword">keyword</label>
            <input
              type="text"
              name="keyword"
              value={this.state.data.keyword}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputkeyword"
              placeholder="keyword"
            />
            <h3 className="text-danger">{this.state.error.keyword}</h3>
          </div>

  <div className="form-group">
            <label htmlFor="exampleInputimg">Image</label>
            <input
              type="file"
              name="img"
              value={this.state.data.img}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputimg"
              placeholder="Img"
            />
          </div>


                 <button type="submit" className="btn btn-primary">
            Post listing
          </button>
        </form>
        {this.state.success === "" ? (
          <p />
        ) : (
          <p className="text-success">{this.state.success}</p>
        )}
        <br />
        <br />
      
      </div>
    );
  }
}