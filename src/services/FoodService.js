import Parse from "parse";

// READ operation - get all food items in Parse class foods
export const getAllFoods = () => {
  const Food = Parse.Object.extend("foods");
  const query = new Parse.Query(Food);
  return query.find().then((results) => {
    // returns array of food objects
    return results;
  });
};
