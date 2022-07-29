import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import BurgerHooks from "./BurgerHooks";


const SignUp = () => {

  const auth = getAuth();

  const [currentUser, setCurrentUser] = useState(false);
  const registerUser = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {

      createUserWithEmailAndPassword(auth, email.value, password.value);
      setCurrentUser(true);
    }
    catch (error) {
      alert(error);
    }
  };

  const signInUser = (e) => {
    const { email, password } = e.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        setCurrentUser(true)
        alert('Signed In')
      })
      .catch((error) => {
        alert(error);
      });
  };

  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setCurrentUser(false)
    }).catch((error) => {
      alert(error)
    });
  }

  if (currentUser === 'Yes') {
    <Navigate to='/orders' />
  }

  <BurgerHooks user = {String(currentUser)} />

  return (
    <div className="p-5">
      <h1>Sign Up</h1>
      <form onSubmit={registerUser}>
        <label for="email" className="my-2">Email</label>
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <label for="password" className="my-2">Password</label>
        <br />
        <input className="mb-3" type="password" name="password" placeholder="Password" required />
        <br />
        <button className="btn btn-sm btn-success" type="submit">Register</button>
        <button className="btn btn-sm btn-primary mx-2" onClick={signInUser}>SignIn</button>
        <button className="btn btn-sm btn-danger" onClick={signOutUser}>SignOutUser</button>
        <hr width='16%'/>
        <em> User Logged In: {String(currentUser)} </em>

      </form>
    </div>
  );
};

export default SignUp;
