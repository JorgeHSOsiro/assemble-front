import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import api from '../../services/userApi';
import './style.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      email: 'missing @ or .',
      min: 'Invalid password',
      in: 'Password must match',
      required: 'Field is required',
    },
  }));
  const {
    errorName, errorEmail, errorPassword,
  } = simpleValidator.current.fields;

  const registerUser = () => {
    api.register(name, email, password).then(() => {
      history.push('/login');
    }).catch(() => {
      setMessage('E-mail already in database');
    });
  };

  return (
    <div className="register-container">
      <h2 className="title">Sign up</h2>
      <form className="form-content">
        <div className="name-field">
          <label htmlFor="name">
            Name:
            <input
              name="name"
              type="name"
              onChange={ (e) => setName(e.target.value) }
              onBlur={ simpleValidator.current.showMessageFor('errorName') }
            />
          </label>
          {simpleValidator.current.message('errorName', name, 'required')}
        </div>
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
          {simpleValidator.current.message('errorEmail', email, 'required|email')}
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
          { simpleValidator.current.message('errorPassword', password, 'required|min:6') }
        </div>
        {errorName && errorEmail && errorPassword ? (
          <button className="register-btn" type="button" onClick={ registerUser }>
            Send
          </button>
        ) : (
          <button
            className="register-btn btn-fog"
            type="button"
            onClick={ registerUser }
            disabled
          >
            Send
          </button>
        )}
        <div className="notification-msg">
          { message ? <p>{ message }</p> : '' }
        </div>
      </form>
    </div>
  );
};

export default Register;
