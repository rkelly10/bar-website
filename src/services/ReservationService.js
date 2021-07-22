import Parse from "parse";

//RESERVATIONS

// CREATE operation - new Reservation with Name
export const createReservation = async function (Name, Date, Time, Number) {
  console.log("Creating: ", Name);
  const Reservation = Parse.Object.extend("Reservation");
  const reservation = new Reservation();
  // using setter to UPDATE the object
  reservation.set("name", Name);
  reservation.set("date", Date);
  reservation.set("time", Time);
  reservation.set("number", Number);
  const currentUser = await Parse.User.currentAsync();
  if (currentUser === null) {
    reservation.set("username", '');
  }
  else {
    reservation.set("username", currentUser.get('username'));
  }

  return reservation.save().then((result) => {
    // returns new Reservation object
    return result;
  });
};

// READ operation - get Reservation by ID
export const getReservationById = (id) => {
  const Reservation = Parse.Object.extend("Reservation");
  const query = new Parse.Query(Reservation);
  return query.get(id).then((result) => {
    // return Lesson object with objectId: id
    return result;
  });
};

// READ operation - get all Reservations in Parse class Reservation
export const getAllReservations = () => {
  const Reservation = Parse.Object.extend("Reservation");
  const query = new Parse.Query(Reservation);
  return query.find().then((results) => {
    // returns array of Lesson objects
    return results;
  });
};

// DELETE operation - remove Reservation by ID
export const removeReservation = (id) => {
  const Reservation = Parse.Object.extend("Reservation");
  const query = new Parse.Query(Reservation);
  return query.get(id).then((reservation) => {
    reservation.destroy();
  });
};