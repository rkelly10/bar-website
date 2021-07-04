import React, { useState, useEffect } from 'react';
import './reservations.css';
import { Header, SubHeader } from "../../services/Header.js";

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

      <form action="successful_submit.html">
       
        <h5><b>Name: </b></h5>
        <input type="text" placeholder="Enter Name" required />

        
        <h5><b>Email: </b></h5>
        <input type="email" placeholder="Enter Email" required />

       
        <h5><b>Contact Number: </b></h5>
        <input type="text" placeholder="Enter Contact Number" required />

       
        <h5><b>Number of People:</b></h5>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="20"
          placeholder="1"
          required
        />

       
        <h5><b>Date: </b></h5>
        <input type="date" required />

       
        <h5><b>Time: </b></h5>
        <input type="time" required />

     
        <h5><b>Additional comments or questions: </b></h5>
        <textarea name="comments" cals="250" rows="5"></textarea>
        <br /><br />

        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Reservations;