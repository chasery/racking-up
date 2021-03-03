import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UsersApiService from '../../services/users-api-service';
import Form from '../Form/Form';
import FormField from '../FormField/FormField';
import Error from '../Error/Error';

function SignUpForm(props) {
  const history = useHistory();

  // Controlled form state
  const [email, setEmail] = useState({ value: '', error: null });
  const [password, setPassword] = useState({ value: '', error: null });
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: '',
    error: null,
  });
  const [name, setName] = useState({ value: '', error: null });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    UsersApiService.postUser({
      email: email.value,
      password: password.value,
      name: name.value,
    })
      .then((res) => {
        setEmail({ ...email, value: '' });
        setPassword({ ...password, value: '' });
        setPasswordConfirm({ ...password, value: '' });
        setName({ ...name, value: '' });
        history.push(`/sign-in`);
      })
      .catch((error) => {
        setError(error.error);
      });
  };

  return (
    <Form id='Register' onSubmit={(e) => handleSubmit(e)}>
      <h2>Sign up today!</h2>
      <p>
        Creating an account for Racking Up is easy! Fill out the information
        below to create an account.
      </p>
      <FormField
        id='email'
        label='Email'
        type='email'
        isRequired={true}
        onChange={(e) => setEmail({ ...email, value: e.target.value })}
        value={email.value}
      />
      <FormField
        id='password'
        label='Password'
        type='password'
        isRequired={true}
        onChange={(e) => setPassword({ ...password, value: e.target.value })}
        value={password.value}
      />
      <FormField
        id='passwordConfirm'
        label='Password (Confirm)'
        type='password'
        isRequired={true}
        onChange={(e) =>
          setPasswordConfirm({ ...passwordConfirm, value: e.target.value })
        }
        value={passwordConfirm.value}
      />
      <FormField
        id='name'
        label='Name'
        type='text'
        isRequired={false}
        onChange={(e) => setName({ ...name, value: e.target.value })}
        value={name.value}
      />
      {error ? <Error message={error} /> : null}
      <div className='Form__controls'>
        <button type='submit'>Sign Up</button>
      </div>
      <p className='Form__footer'>
        Already have an account? Sign in to your Racking Up account{' '}
        <Link to='/sign-in'>here</Link>.
      </p>
    </Form>
  );
}

export default SignUpForm;
