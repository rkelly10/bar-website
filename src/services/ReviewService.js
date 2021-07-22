import Parse from "parse";

//RESERVATIONS

// CREATE operation - new Reservation with Name
export const createReview = async function (reviewcontent) {
  console.log("Creating: ", reviewcontent);
  const Review = Parse.Object.extend("Reviews");
  const review = new Review();
  // using setter to UPDATE the object
  const currentUser = await Parse.User.currentAsync();
  review.set("review", reviewcontent);
  if (currentUser === null) {
    review.set("username", 'anonymous');
  }
  else {
    review.set("username", currentUser.get('firstName'));
  }
  return review.save().then((result) => {
    // returns new review object
    alert(
      `Succesfully left review under ${currentUser.get('firstName')}!`
    );

    return result;
  });
};

// READ operation - get Reservation by ID
export const getReviewById = (id) => {
  const Review = Parse.Object.extend("Reviews");
  const query = new Parse.Query(Review);
  return query.get(id).then((result) => {
    // return Lesson object with objectId: id
    return result;
  });
};
