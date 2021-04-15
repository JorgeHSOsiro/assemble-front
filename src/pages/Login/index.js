import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import api from '../../services/userApi';
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      email: 'Invalid mail!',
      required: 'Field is required!',
    },
  }));
  const { errorEmail, errorPassword } = simpleValidator.current.fields;
  const history = useHistory();

  const checkLogin = () => {
    api.login(email, password).then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push('/home');
    }).catch(() => setMessage('Email or password do not match'));
  };
  const sendForm = (e) => {
    e.preventDefault();
    checkLogin();
  };

  return (
    <div className="login-container">
      <h2 className="title">Login</h2>
      <form className="form-content" onSubmit={ (e) => sendForm(e) }>
        <div className="email-field">
          <label htmlFor="email">
            Email:
            <input
              name="email"
              type="email"
              onChange={ (e) => setEmail(e.target.value) }
              onBlur={ simpleValidator.current.showMessageFor('errorEmail') }
            />
          </label>
          { simpleValidator.current.message('errorEmail', email, 'required|email') }
        </div>
        <div className="password-field">
          <label htmlFor="password">
            Password:
            <input
              name="password"
              type="password"
              onChange={ (e) => setPassword(e.target.value) }
              onBlur={ simpleValidator.current.showMessageFor('errorPassword') }
            />
          </label>
          { simpleValidator.current.message('errorPassword', password, 'required') }
        </div>
        <div className="notification-msg">
          { message ? <p>{ message }</p> : '' }
        </div>
        <div className="btn-container">
          { errorEmail && errorPassword
            ? <button type="submit" className="login-btn">Login</button>
            : <button type="submit" className="login-btn btn-fog" disabled>Login</button> }
          <Link className="go-register" to="/register">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
