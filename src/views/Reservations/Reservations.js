import React, { useState, useEffect } from 'react';
import './reservations.css';
import { Header, SubHeader } from "../../services/Header.js";

import DrinkList from "../../components/Main/ReservationList";
import * as Env from "../../environments";
import Parse from "parse";
import ReservationList from '../../components/Main/ReservationList';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const Reservations = props => {

  return (
    <div class="info">
      <h1>Step-Brothers</h1>
      <h2 class="subtitle">Make a Reservation</h2>

      <p>
        Hi there!
        <br />
        <br />
        We are delighted to welcome you back to Step-Brothers!
        <br />
        <br />
        We want you to feel safe and comfortable, so our team has been working
        very hard behind the scenes to implement various COVID-19 safety
        standards within our bar, restaurant, and outdoor dining area.
        <br />
        <br />
        We are taking bookings for up to 20 people, and will also be keeping
        limited tables available for walk-ins. If you would like to reserve a
        table, please fill out our form below.
        <br />
        <br />
        We look forward to seeing you soon!
        <br />
        <br />
        The Step-Brothers Team
      </p>

      <ReservationList />
      
    </div>
  );
};

export default Reservations;