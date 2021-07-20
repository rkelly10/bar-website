import React, { useEffect, useState } from "react";
import Parse from "parse";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import { Reservations } from '../../views/Reservations';

const ReservationProtect = () => {
  const [flag, setFlag] = useState(false);

  const isLoggedIn = Parse.User.current();

  useEffect(() => {
    if (isLoggedIn) {
        console.log("GOOD");
        setFlag(true);
    }
    else {
        console.log("BAD");
        setFlag(false);
    }
  }, [isLoggedIn, flag]);

  // In this case the flag is acquired through a check box but it could also be received from other methods
  // What is a Parse.User method that would help here?

  return (
    <div>
      <ProtectedRoute
        exact
        path="/Reservations"
        flag={flag}
        component={Reservations}
      />
    </div>
  );
};

export default ReservationProtect;
