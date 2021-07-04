import React, { useState, useEffect } from 'react';
import './menu.css';
import { Header, SubHeader } from "../../services/Header.js";
import { getMenuItems } from "../../services/menuItems.js";

const Menu = props => {

  return (
    <div>
     <div class="info">
    <Header title="STEP-BROTHERS">
  </Header>
  <h2 class="subtitle">Bar Menu</h2>
  <SubHeader title="Drinks"/>
    <ul >
      
    </ul>
    <SubHeader title="Food"/>
    <ul>
        
      </ul>
      </div>
    </div>
  );
};

export default Menu;