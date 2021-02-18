import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import RakcingUpContext from './RackingUpContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './views/Landing/Landing';
import SignIn from './views/SignIn/SignIn';
import ViewRacks from './views/ViewRacks/ViewRacks';
import AddRack from './views/AddRack/AddRack';
import EditRack from './views/EditRack/EditRack';
import ViewRack from './views/ViewRack/ViewRack';
import AddRackItem from './views/AddRackItem/AddRackItem';
import EditRackItem from './views/EditRackItem/EditRackItem';
import TokenService from './services/token-service';
import AuthApiService from './services/auth-api-service';
import IdleService from './services/idle-service';
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute';
import PrivateRoute from './components/Utils/PrivateRoute';

function App() {
  const location = useLocation();
  const [racks, setRacks] = useState([
    {
      id: '9d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackName: 'Fall 2021',
    },
    {
      id: '8d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackName: 'Summer 2021',
    },
    {
      id: '7d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackName: 'Anniversary Outfit',
    },
  ]);
  const [rackItems, setRackItems] = useState([
    {
      id: '7c76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackId: '9d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      name: 'H&M Navy Hoody',
      url: 'https://www2.hm.com/en_us/index.html',
      price: 50.0,
    },
    {
      id: '6c76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackId: '9d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      name: 'Columbia Rain Jacket',
      url: 'https://www.columbia.com/',
      price: 75.0,
    },
    {
      id: '5c76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackId: '9d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      name: 'Mountain Hardware Long Sleeve Shirt',
      url: 'https://www.mountainhardwear.com/',
      price: 25.0,
    },
    {
      id: '4c76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackId: '9d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      name: 'APC Raw Denim Jeans',
      url: 'https://www.apc-us.com/collections/men-denim',
      price: 200.0,
    },
    {
      id: '3c76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackId: '8d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      name: 'H&M V Neck Tshirts',
      url: 'https://www2.hm.com/en_us/index.html',
      price: 25.0,
    },
    {
      id: '2c76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackId: '8d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      name: 'Express Oxford Shirt',
      url: 'https://www.express.com/',
      price: 25.0,
    },
    {
      id: '1c76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      rackId: '8d76e150-95ee-4cf1-8b4f-fbd4934a4eed',
      name: 'Prana Dock Shorts',
      url: 'https://www.prana.com/',
      price: 75.0,
    },
  ]);

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

  const addRack = (rack) => setRacks((prevRacks) => [...prevRacks, rack]);
  // const editRack = (rack) => {};
  // const deleteRack = (rackId) => {};

  const addRackItem = (rackItem) =>
    setRackItems((prevRackItems) => [...prevRackItems, rackItem]);
  // const editRackItem = (rackItem) => {};
  // const deleteRackItem = (rackItemId) => {};

  const contextValue = {
    racks,
    rackItems,
    addRack,
    // editRack: () => {},
    // deleteRack: () => {},
    addRackItem,
    // editRackItem: () => {},
    // deleteRackItem: () => {},
  };

  return (
    <>
      <RakcingUpContext.Provider value={contextValue}>
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
      </RakcingUpContext.Provider>
    </>
  );
}

export default App;
