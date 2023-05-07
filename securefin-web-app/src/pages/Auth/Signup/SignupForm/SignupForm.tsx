import React, { Component } from 'react';
import "../../Auth.scss";
import { Link, useNavigate } from "react-router-dom";

  class SignUpForm extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
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

    onPassword2Change = (e: any) => {
      this.setState({ password2: e.target.value })
      console.log(e.target.value)
    }

    onSubmit = (e: any) => {
      e.prevent.default();
    }

    render() {
      const { errors } = this.state;
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
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onNameChange}
                      value={this.state.name}
                      onError={errors.name}
                      placeholder='Name'
                      id="name"
                      type="text"
                    />
                    <label htmlFor="name"></label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onEmailChange}
                      value={this.state.email}
                      onError={errors.email}
                      placeholder='Email'
                      id="email"
                      type="email"
                    />
                    <label htmlFor="email"></label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onPasswordChange}
                      value={this.state.password}
                      onError={errors.password}
                      placeholder='Password'
                      id="password"
                      type="password"
                    />
                    <label htmlFor="password"></label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onPassword2Change}
                      value={this.state.password2}
                      onError={errors.password2}
                      placeholder='Confirm Password'
                      id="password2"
                      type="password"
                    />
                    <label htmlFor="password2"></label>
                  </div>
                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem",
                        background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)',
                      }}
                      
                      type="submit"
                      className="btn center waves-effect waves-light hoverable blue accent-3"
                    >
                      Sign up
                    </button>
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

  
