import React from "react";

/* STATELESS CHILD COMPONENT */
const ReservationForm = ({onNameChange, onClick, onDateChange, onTimeChange, onNumberChange}) => {
  return (
    <div>
      
      <form>

        <h5><b>Name: </b></h5>
        <input text="name" onChange={onNameChange} />

        <h5><b>Number of People:</b></h5>
        <input text="number" onChange={onNumberChange} />

        <h5><b>Date: (MM/DD/YY)</b></h5>
        <input text="date" onChange={onDateChange} />

        <h5><b>Time: </b></h5>
        <input text="time" onChange={onTimeChange} />

        <h5><b>Additional comments or questions: </b></h5>
        <textarea name="comments" cals="250" rows="5"></textarea>
        <br /><br />

        <br /><br />

        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
