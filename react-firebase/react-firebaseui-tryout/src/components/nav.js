import React, { useContext } from "react";
import "../App.css";
import firebase from "firebase";
import { FirebaseAuth } from "react-firebaseui";
import { AuthContext } from "../Firebase/context";
import { Link, Redirect } from "react-router-dom";

import app from '../Firebase/config'

export default function Nav() {
   //get the user state from context
  const { user } = useContext(AuthContext);

//if user exists, display user name and picture.
//else, show a sign in button instead
  return (
      <div className="account">
        {!!user ? (
          <div className="dropdown">
            <p>{`Welcome, ${user.displayName}`}</p>
            <div className="dropdown-content">
              <Link to="/">Create Stories</Link>
              <Link to="/">My Stories</Link>
              <Link onClick={() => app.auth().signOut()}>Sign Out</Link>
            </div>
          </div>
        ) : (
          <Link to="/signin">
            <button>SIGN IN/ REGISTER</button>
          </Link>
        )}
      </div>
  );
}