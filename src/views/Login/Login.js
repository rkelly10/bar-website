import React from 'react';
import { Link } from "react-router-dom";
import {LoginForm} from "../../components/Auth/AuthLogin"


import './login.css';

const Login = props => {
  return (
    <body >

    <div class="info">
      <h1>Step-Brothers</h1>
      <h2 class="subtitle">Login to Your Account</h2>

      <p>
        Enter username and password to Login.
      </p>
      < LoginForm />
      < br />
      <p>
        Don't have an account? Click Register below to sign up.
      </p>
      <Link to="/Register">
        <button>Register</button>
      </Link>
    </div>
  </body>
  );
};

export default Login;

