import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import logo from '../../assets/svg/racking-up-logo.svg';
import add from '../../assets/svg/add.svg';
import './Header.css';

function Header(props) {
  const location = useLocation();
  const { rackId } = useParams();

  const handleSignOut = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  const renderSignIn = () => {
    return (
      <li>
        <Link className='Header__button secondary' to='/sign-in'>
          Sign In
        </Link>
      </li>
    );
  };

  const renderSignOut = () => {
    return (
      <li>
        <Link
          className='Header__button secondary'
          to='/'
          onClick={handleSignOut}
        >
          Sign Out
        </Link>
      </li>
    );
  };

  const renderAddRack = () => {
    return (
      <li>
        <Link className='Header__button primary' to='/racks/add-rack'>
          <img src={add} alt='Add a rack' />
          <span>Rack</span>
        </Link>
      </li>
    );
  };

  const renderAddRackItem = () => {
    return (
      <li>
        <Link
          className='Header__button primary'
          to={`/racks/${rackId}/add-rack-item`}
        >
          <img src={add} alt='Add an item to your rack' />
          <span>Item</span>
        </Link>
      </li>
    );
  };

  return (
    <header className='Header' role='banner'>
      <div className='Header__wrapper'>
        <h1 className='Header__title'>
          {TokenService.hasAuthToken() ? (
            <Link to='/racks'>
              <img src={logo} alt='Racking Up logo' />
              <span>
                Racking<span className='Header__titleColor'>Up</span>
              </span>
            </Link>
          ) : (
            <Link to='/'>
              <img src={logo} alt='Racking Up logo' />
              <span>
                Racking<span className='Header__titleColor'>Up</span>
              </span>
            </Link>
          )}
        </h1>
        <nav className='Nav' role='navigation'>
          <ul>
            {location.pathname === '/racks' ? renderAddRack() : null}
            {location.pathname === `/racks/${rackId}`
              ? renderAddRackItem()
              : null}
            {TokenService.hasAuthToken() ? renderSignOut() : renderSignIn()}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
