import React, { useEffect, useState } from "react";
import Parse from "parse";
import { doUserLogIn } from "./AuthService";


export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // flags in the state to watch for login submission updates
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            doUserLogIn(username, password)
        }
      }, [isSubmitted]);


      const onUsernameChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setUsername(e.target.value);
      };

      const onPasswordChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setPassword(e.target.value);
      };

      const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted: ", e.target);
        setIsSubmitted(true);
      };

    return (
    <div>
      
    <form>

      <h5><b>  Username: </b></h5>
      <input text="username" onChange={onUsernameChange} />

      <h5><b> Password:</b></h5>
      <input text="password" onChange={onPasswordChange} />
      <br /><br />

      <button type="login" onClick={onSubmitHandler}>
        Login
      </button>
    </form>
  </div>


  );
};


