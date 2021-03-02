import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
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
        <Link to='/sign-in'>Sign In</Link>
      </li>
    );
  };

  const renderSignOut = () => {
    return (
      <li>
        <Link to='/' onClick={handleSignOut}>
          Sign Out
        </Link>
      </li>
    );
  };

  const renderAddRack = () => {
    return (
      <li>
        <Link to='/racks/add-rack'>+ Add Rack</Link>
      </li>
    );
  };

  const renderAddRackItem = () => {
    return (
      <li>
        <Link to={`/racks/${rackId}/add-rack-item`}>+ Add Rack Item</Link>
      </li>
    );
  };

  return (
    <header className='Header' role='banner'>
      <div className='Header__wrapper'>
        <h1 className='Header__title'>
          {TokenService.hasAuthToken() ? (
            <Link to='/racks'>Racking Up</Link>
          ) : (
            <Link to='/'>Racking Up</Link>
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
