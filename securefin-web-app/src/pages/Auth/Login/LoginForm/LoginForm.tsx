import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../Auth.scss";

class LoginForm extends Component<any, any> {
  constructor(props: any){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmitSignIn = (e: any) => {
    fetch('http://localhost:5000/api/users/login', {
      mode: 'cors',
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id) {
        console.log('1')
        console.log(user);
      } else {
        alert('Invalid username or password')
      }
      console.log('2')
    })
  }

  render() {
    return (
      <>
        <div>
          <main className="pa4 black-80">
              <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                    <div className="input-field col s12">
                      <input
                          id="email"
                          type="email"
                          placeholder="Email"
                      />
                      <label htmlFor="email"></label>
                  </div>
                  <div className="input-field col s12">
                      <input
                          id="password"
                          type="password"
                          placeholder="Password"
                      />
                      <label htmlFor="password"></label>
                  </div>
                  <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                </fieldset>
                <div className="">
                  <div
                   style={{background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)'}}
                   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-100" 
                   >
                    Login
                   </div>
                </div>
                <div className="lh-copy mt3"
                  onClick={this.onSubmitSignIn}
                >
                  <Link 
                    to="/"
                    className="f6 link dim db pointer">
                    Login
                  </Link>
                  <a className="f6 link dim db pointer">Forgot your password?</a>
                </div>
              </form>
            </main>
        </div>
      </>
    );
  };  
}



export default LoginForm;

