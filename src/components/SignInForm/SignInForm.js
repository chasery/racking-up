import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import FormField from '../FormField/FormField';
import './SignInForm.css';

function SignInForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    AuthApiService.postLogin({
      email: email,
      password: password,
    })
      .then((res) => {
        setEmail('');
        setPassword('');
        props.onSignInSuccess();
      })
      .catch((res) => {
        setError(res.error);
      });
  };

  return (
    <form id='SignIn' className='SignInForm' onSubmit={(e) => handleSubmit(e)}>
      <h2>Sign In</h2>
      <p>Enter your Racking Up account credentials below to sign in.</p>
      <FormField
        id='email'
        label='Email'
        type='email'
        isRequired={true}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <FormField
        id='password'
        label='Password'
        type='password'
        isRequired={true}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {error && <p className='SignInForm__error'>{error}</p>}
      <button>Sign In</button>
      <p className='SignInForm__footer'>
        Don't have an account? Sign up for a Racking Up account{' '}
        <Link to='/'>here</Link>.
      </p>
    </form>
  );
}

export default SignInForm;
