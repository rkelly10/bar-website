import React from "react";
import { Redirect } from "react-router-dom";
import './ProtectedRoute.css';

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  
  console.log(rest); // show rest.path in the console
  // you could redirect back to /auth if the flag is not true
  return (
    <div className="info">
    <h1>Step-Brothers</h1>
      {flag ? (
        <Redirect to={rest.path} />
      ) : (
        <div>
          <p>Only logged in users can make reservations and view the reservation schedule. Please log in or create an account to view reservations.</p> 
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
