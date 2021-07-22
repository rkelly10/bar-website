import React from 'react';
import Parse from "parse";
import { Home } from '../views/Home';
import { About } from '../views/About';
import { Menu } from '../views/Menu';
import { Reservations } from '../views/Reservations';
import { Feedback } from '../views/Feedback';
import { Login } from '../views/Login';
import { NavBar } from '../components/NavBar';
import AuthRegister from "../components/Auth/AuthRegister";

import { Route, Switch, Redirect } from 'react-router-dom';


import ReservationProtect from "../components/Main/ReservationProtect.js";

export const Routes = () => {
  var isLoggedIn = Parse.User.current();

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route path="/protect" component={ReservationProtect} />
        <Route exact path="/Feedback" component={Feedback} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Register" component={AuthRegister} />
        <Route exact path="/Login" component={Login} />
        {isLoggedIn ? (
          <Route exact path="/Reservations" component={Reservations} />
        ) : (
          <Redirect to="/protect" />
        )}
      </Switch>
    </div>
  );
};