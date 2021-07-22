import React, { useEffect, useState } from "react";
import {
  createReservation,
  getAllReservations
} from "../../services/ReservationService";

import {getCurrentUserName} from "../Auth/AuthService"

import ReservationForm from "./ReservationForm";

/* STATEFUL PARENT COMPONENT */
const ReservationList = () => {
  // Variables in the state to hold data


  const [reservations, setReservations] = useState([]);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [number, setNumber] = useState();

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {

    getCurrentUserName().then((currentUsername) => {
      setUsername(currentUsername);
    });

    getAllReservations().then((reservations) => {
      console.log(reservations);
      setReservations(reservations);
    });

  }, []);

  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (name && add) {
      createReservation(name, date, time, number).then((newReservation) => {
        setAdd(false);
        // Add the newly created reservation to the reservations array
        // to render the new list of reservations (thru spread/concatination)
        setReservations([...reservations, newReservation]);

      });
    }

  }, [name, date, number, time, reservations, add, remove]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create reservation and
    // re-render list with new reservation
    setAdd(true);
  };

  // Handler to track changes to the child name input text
  const onNameChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating name to be added on submit
    setName(e.target.value);
  };

  // Handler to track changes to the child date input text
  const onDateChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating date to be added on submit
    setDate(e.target.value);
  };

  // Handler to track changes to the child time input text
  const onTimeChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating time to be added on submit
    setTime(e.target.value);
  };

  // Handler to track changes to the child number input text
  const onNumberChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating number to be added on submit
    setNumber(e.target.value);
  };

  return (
    <div>
        {/* Stateless Child component passing up events from form */}
      <ReservationForm onClick={onClickHandler} onNameChange={onNameChangeHandler} onDateChange={onDateChangeHandler} onTimeChange={onTimeChangeHandler} onNumberChange={onNumberChangeHandler} />
      <hr />
      <h2>Current Reservations</h2>
      <div>
        {reservations.length > 0 && (
          <ul>
            {reservations.map((reservation) => (
              <div>
                <span>
                  {/* Using getter for reservation Object to display name */}
                  <li key={reservation.id}> {reservation.get("date")} {reservation.get("time")} : Party of {reservation.get("number")}</li>{" "}
                  {/* Button with inline click handler to obtain 
                  instance of reservation for remove state variable*/}
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
      <h2>Your Reservations</h2>
      <div>
        {reservations.length > 0 && (
          <ul>
            {reservations.map((reservation) => (
              <div>
                <span>
                  { reservation.get("username") === username && (
                    <b>{reservation.get("date")} {reservation.get("time")} : Party of {reservation.get("number")}</b>
                  )}
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
      </div>
  );
};

export default ReservationList;
