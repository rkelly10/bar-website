import React, { useEffect, useState } from "react";
import {
  createReview
} from "../../services/ReviewService";


/* STATELESS CHILD COMPONENT */
const FeedbackForm = ({onNameChange, onClick, onDateChange, onTimeChange, onNumberChange}) => {
  // Variables in the state to hold data


  const [review, setReview] = useState();
  const [add, setAdd] = useState(false);


  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (review && add) {
      createReview(review).then(() => {
        setAdd(false);

      });
    }

  }, [review, add]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create reservation and
    // re-render list with new reservation
    setAdd(true);
  };

  // Handler to track changes to the child name input text
  const onReviewChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating name to be added on submit
    setReview(e.target.value);
  };

  
  return (
    <div>
      
      <form>

        <h5><b>Review: </b></h5>
        <input text="review" onChange={onReviewChangeHandler} />

        <br /><br />

        <br /><br />

        <button type="submit" onClick={onClickHandler}>
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
