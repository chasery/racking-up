import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./views/Landing/Landing";
import SignIn from "./views/SignIn/SignIn";
import ViewRacks from "./views/ViewRacks/ViewRacks";
import AddRack from "./views/AddRack/AddRack";
import EditRack from "./views/EditRack/EditRack";
import ViewRack from "./views/ViewRack/ViewRack";
import AddRackItem from "./views/AddRackItem/AddRackItem";
import EditRackItem from "./views/EditRackItem/EditRackItem";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/sign-in" component={SignIn} />
        <Route exact path="/racks" component={ViewRacks} />
        <Route path="/racks/:rackId" component={ViewRack} />
        <Route path="/add-rack" component={AddRack} />
        <Route path="/edit-rack/:rackId" component={EditRack} />
        <Route path="/add-rack-item" component={AddRackItem} />
        <Route path="/edit-rack-item/:rackItemId" component={EditRackItem} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
