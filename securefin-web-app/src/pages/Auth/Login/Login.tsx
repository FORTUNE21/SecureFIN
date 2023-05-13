// import React, { Component } from 'react';
import LoginForm from "./LoginForm/LoginForm";
import { Card } from "../../../components/ui";
import "../Auth.scss";

const Login = () => {
  return (
    <>
      <div /* style={{background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)', height: '100lvh'}}*/ className="auth">
        <Card className="auth__card mt-0">
          <LoginForm />
        </Card>
      </div>
    </>
  );
};

export default Login;
