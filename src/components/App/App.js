import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../../views/Landing/Landing';
import SignIn from '../../views/SignIn/SignIn';
import ViewRacks from '../../views/ViewRacks/ViewRacks';
import AddRack from '../../views/AddRack/AddRack';
import EditRack from '../../views/EditRack/EditRack';
import ViewRack from '../../views/ViewRack/ViewRack';
import AddRackItem from '../../views/AddRackItem/AddRackItem';
import EditRackItem from '../../views/EditRackItem/EditRackItem';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Auth/Token service effect
    const logoutFromIdle = () => {
      TokenService.clearAuthToken();
      TokenService.clearCallbackBeforeExpiry();
      IdleService.unRegisterIdleResets();
    };

    IdleService.setIdleCallback(logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
    return function cleanup() {
      IdleService.unRegisterIdleResets();
      TokenService.clearCallbackBeforeExpiry();
    };
  });

  return (
    <>
      <Header location={location.pathname} />
      <Switch>
        <Route exact path='/' component={Landing} />
        <PublicOnlyRoute path='/sign-in' component={SignIn} />
        <PrivateRoute exact path='/racks' component={ViewRacks} />
        <PrivateRoute path='/racks/:rackId' component={ViewRack} />
        <PrivateRoute path='/add-rack' component={AddRack} />
        <PrivateRoute path='/edit-rack/:rackId' component={EditRack} />
        <PrivateRoute path='/add-rack-item/:rackId' component={AddRackItem} />
        <PrivateRoute
          path='/edit-rack-item/:rackItemId'
          component={EditRackItem}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
