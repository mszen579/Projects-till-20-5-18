//Login.js
import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';

axios.defaults.withCredentials = true;

class Login extends Component {

constructor(props) {
    super(props);
    this.state={
      data:{
        email:'',
        password:''
      },
      error:null
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  submitHandler(e){
    e.preventDefault();
    axios.post("http://localhost:8000/api/login", this.state.data).then((res)=>{
     console.log(res);
     if (res.data.error) {
      return  this.setState({error:res.data.message})
     } 
      return this.props.history.push("/");
    });
  }


  
  changeHandler(e){
    var formData = this.state.data;
    formData[e.target.name] = e.target.value;
    this.setState({
        data : formData
    })

  }

  
  render() {
      var changeHandler= this.changeHandler;
    return (
      <div className='loginform'>
        <h1>Already registered?</h1>
        <h3>login with your details below</h3>
        {this.state.error && <h3 className="text-danger">{this.state.error}</h3> }
      <form onSubmit={this.submitHandler}>
            <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" value={this.state.data.email} name="email" onChange={changeHandler} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={changeHandler} value={this.state.data.password} name="password" type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
</form>
      </div>
    )
  }
}

export default withRouter(Login);