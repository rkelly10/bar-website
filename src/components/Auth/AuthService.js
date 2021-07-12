import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const doUserLogIn = async function (username, password) {
  // Note that these values come from state variables that we've declared before
  const usernameValue = username;
  const passwordValue = password;
  return await Parse.User.logIn(usernameValue, passwordValue)
    .then(async (loggedInUser) => {
      // logIn returns the corresponding ParseUser object
      alert(
        'Success!',
        `User ${loggedInUser.get('username')} has successfully signed in!`,
      );
      // To verify that this is in fact the current user, currentAsync can be used
      const currentUser = await Parse.User.currentAsync();
      console.log(loggedInUser === currentUser);
      return true;
    })
    .catch((error) => {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert('Username and password combination not recognized, please enter correct username and password.', error.message);
      return false;
    });
};


