import React, { useEffect, useState } from "react";
import {
  getReviewById
} from "../../services/ReviewService";

/* STATEFUL PARENT COMPONENT */
const FeedbackList = () => {
  // Variables in the state to hold data

  const [reviews, setReviews] = useState([]);
  const [review1, setReview1] = useState();
  const [review2, setReview2] = useState();
  const [review3, setReview3] = useState();


  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    /*async function getReview1() {
      var response1 = await getReviewById('vyR79O7Yoj')
      setReview1(response1);
    } 

    setReviews([getReview1()]) */

    getReviewById('vyR79O7Yoj').then((review1temp) => {
      console.log(review1temp);
      setReview1(review1temp);
    }); 

    getReviewById('mE755oZMyE').then((review2temp) => {
      console.log(review2temp);
      setReview2(review2temp);
    }); 


  }, []);

  return (
    <div>
        {/* Stateless Child component passing up events from form */}
      <hr />
      <h2>What Our Customers Have to Say</h2>
      <div>
        <main>
      {review1 && (
        <article>
        <b>"{review1.get("review")}"</b> <br/>
        <b>-{review1.get("username")}</b>
        </article>
      )}
      {review2 && (
        <article>
        <b>"{review2.get("review")}"</b> <br/>
        <b>-{review2.get("username")}</b>
        </article>
      )}
      </main>
      </div>
      </div>
  );
};

export default FeedbackList;
