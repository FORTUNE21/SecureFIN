import React, { Component, useState } from 'react';
import { /*Link, useSearchParams,*/ useNavigate } from 'react-router-dom';
import "../../Auth.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitSignIn = async (e: any) => {
    e.preventDefault();

    console.log('help me!')
    const response = await fetch('http://localhost:5000/api/users/login', {
      mode: 'cors',
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      console.log("Login successful!")
      console.log(data)
      navigate('/')
    } else {
      console.error("Login failed. ")
    }
  };


    return (
      <>
        <div>
          <main className="pa4 black-80">
              <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                    <div className="input-field col s12">
                      <input
                          value={email}
                          type="email"
                          placeholder="Email"
                          onChange={(e: any) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email"></label>
                  </div>
                  <div className="input-field col s12">
                      <input
                          value={password}
                          type="password"
                          placeholder="Password"
                          onChange={(e: any) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password"></label>
                  </div>
                  <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                </fieldset>
                <div className="">
                  <div
                   style={{background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)'}}
                   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-100" 
                   onClick={onSubmitSignIn}
                   > Sign In
                   {/* <Link to='/'>
                    Sign In
                   </Link> */}
                   </div>
                </div>
                <div className="lh-copy mt3 f6 link dim db pointer">   
                    Sign up
                  <a className="f6 link dim db pointer">Forgot your password?</a>
                </div>
              </form>
            </main>
        </div>
      </>
    );
}


export default LoginForm;

