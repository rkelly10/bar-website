import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Menu } from './views/Menu';
import { Reservations } from './views/Reservations';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Reservations" component={Reservations} />
      </Switch>
    </div>
  );
};