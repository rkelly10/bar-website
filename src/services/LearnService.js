import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new lesson with Name
export const createLesson = (Name) => {
  console.log("Creating: ", Name);
  const Lesson = Parse.Object.extend("Lesson");
  const lesson = new Lesson();
  // using setter to UPDATE the object
  lesson.set("name", Name);
  return lesson.save().then((result) => {
    // returns new Lesson object
    return result;
  });
};

// READ operation - get lesson by ID
export const getById = (id) => {
  const Lesson = Parse.Object.extend("Lesson");
  const query = new Parse.Query(Lesson);
  return query.get(id).then((result) => {
    // return Lesson object with objectId: id
    return result;
  });
};

// READ operation - get all lessons in Parse class Lesson
export const getAllLessons = () => {
  const Lesson = Parse.Object.extend("Lesson");
  const query = new Parse.Query(Lesson);
  return query.find().then((results) => {
    // returns array of Lesson objects
    return results;
  });
};

// DELETE operation - remove lesson by ID
export const removeLesson = (id) => {
  const Lesson = Parse.Object.extend("Lesson");
  const query = new Parse.Query(Lesson);
  return query.get(id).then((lesson) => {
    lesson.destroy();
  });
};

// READ operation - get all drinks in Parse class drinks
export const getAllDrinks = () => {
  const Drink = Parse.Object.extend("drinks");
  const query = new Parse.Query(Drink);
  return query.find().then((results) => {
    // returns array of drink objects
    return results;
  });
};

// READ operation - get all food items in Parse class foods
export const getAllFoods = () => {
  const Food = Parse.Object.extend("foods");
  const query = new Parse.Query(Food);
  return query.find().then((results) => {
    // returns array of food objects
    return results;
  });
};

//RESERVATIONS

// CREATE operation - new Reservation with Name
export const createReservation = (Name, Date, Time, Number) => {
  console.log("Creating: ", Name);
  const Reservation = Parse.Object.extend("Reservation");
  const reservation = new Reservation();
  // using setter to UPDATE the object
  reservation.set("name", Name);
  reservation.set("date", Date);
  reservation.set("time", Time);
  reservation.set("number", Number);
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