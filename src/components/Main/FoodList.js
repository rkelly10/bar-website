import React, { useEffect, useState } from "react";
import {
  getAllFoods
} from "../../services/LearnService";

/* STATEFUL PARENT COMPONENT */
const FoodList = () => {
  // Variables in the state to hold data
  const [foods, setFoods] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {


    getAllFoods().then((foods) => {
      console.log(foods);
      setFoods(foods);
    });
  }, []);


  return (
    <div>
        {foods.length > 0 && (
          <ul>
            {foods.map((food) => (
              <div>
                <span>
                  {/* Using getter for lesson Object to display name */}
                  <li key={food.id}>{food.get("name")} | {food.get("price")}</li>{" "}
                  {/* Button with inline click handler to obtain 
                  instance of lesson for remove state variable*/}
                </span>
              </div>
            ))}
          </ul>
        )}
    </div>
  );
};

export default FoodList;
