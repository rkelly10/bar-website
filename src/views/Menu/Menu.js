import React, { useState, useEffect } from 'react';
import './menu.css';
import { Header, SubHeader } from "../../services/Header.js";

import DrinkList from "../../components/Main/DrinkList";
import FoodList from "../../components/Main/FoodList";
import * as Env from "../../environments";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const Menu = props => {

  return (
    <div>
     <div class="info">
    <Header title="STEP-BROTHERS">
  </Header>
  <h2 class="subtitle">Bar Menu</h2>
  <SubHeader title="Drinks"/>
  <DrinkList />
    <SubHeader title="Food"/>
    <FoodList />
      </div>
    </div>
  );
};

export default Menu;