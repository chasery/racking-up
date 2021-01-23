import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./views/Landing/Landing";
import Racks from "./views/Racks/Racks";
import SignIn from "./views/SignIn/SignIn";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/racks" component={Racks} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
