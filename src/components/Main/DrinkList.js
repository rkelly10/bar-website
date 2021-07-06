import React, { useEffect, useState } from "react";
import {
  getAllDrinks
} from "../../services/LearnService";

/* STATEFUL PARENT COMPONENT */
const DrinkList = () => {
  // Variables in the state to hold data

  const [drinks, setDrinks] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {


    getAllDrinks().then((drinks) => {
      console.log(drinks);
      setDrinks(drinks);
    });
  }, []);


  return (
    <div>
        {drinks.length > 0 && (
          <ul>
            {drinks.map((drink) => (
              <div>
                <span>
                  {/* Using getter for lesson Object to display name */}
                  <li key={drink.id}>{drink.get("name")} | {drink.get("price")}</li>{" "}
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

export default DrinkList;
