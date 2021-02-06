import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SignInForm from '../../components/SignInForm/SignInForm';
import './SignIn.css';

function SignIn(props) {
  const location = useLocation();
  const history = useHistory();

  const handleSignInSuccess = () => {
    // const { location, history } = props;
    const destination = (location.state || {}).from || '/racks';

    history.push(destination);
  };

  return (
    <main role='main'>
      <section className='SignIn'>
        <div className='SignIn__wrapper'>
          <SignInForm onSignInSuccess={handleSignInSuccess} />
        </div>
      </section>
    </main>
  );
}

export default SignIn;
