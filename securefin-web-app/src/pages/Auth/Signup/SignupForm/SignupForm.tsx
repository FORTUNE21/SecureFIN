import React, { Component, useState } from 'react';
import "../../Auth.scss";
import { Link, useNavigate } from "react-router-dom";

class SignUpForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      router: ""
    }
  }


  onNameChange = (e: any) => {
    this.setState({ name: e.target.value })
    console.log(e.target.value)
  }

  onEmailChange = (e: any) => {
    this.setState({ email: e.target.value })
    console.log(e.target.value)
  }

  onPasswordChange = (e: any) => {
    this.setState({ password: e.target.value })
    console.log(e.target.value)
  }

  onSubmitSignUp = (e: any) => {
    fetch('http://localhost:5000/api/users/signup', {
      mode: 'cors',
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(json => {
      if (json) {
        console.log(json);
      }
    })
    .catch(error => console.log('Authorization failed: ' + error.message));
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="">
            <div className="col s8 offset-s2">
              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back to
                home
              </Link>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Sign up</b> below
                </h4>
                <p className="grey-text text-darken-1">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
              </div>
              <form>
                <div className="input-field col s12">
                  <input
                    onChange={this.onNameChange}
                    placeholder='Name'
                    id="name"
                    type="text"
                  />
                  <label htmlFor="name"></label>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onEmailChange}
                    placeholder='Email'
                    id="email"
                    type="email"
                  />
                  <label htmlFor="email"></label>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onPasswordChange}
                    placeholder='Password'
                    id="password"
                    type="password"
                  />
                  <label htmlFor="password"></label>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <div
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                      background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)',
                    }}
                    
                    onClick={this.onSubmitSignUp}
                    className="btn center waves-effect waves-light hoverable blue accent-3"
                  >
                    <Link to='/login'>
                    Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};


  export default SignUpForm;

  
