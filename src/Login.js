import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import "./login.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="box">
        <br />
        <br />
        <h1 className="pos">BAMIT</h1>
        <form onSubmit={handleLogin} className="box">
          <label>
            <span>Email </span>
            <input
              className="margin"
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
          <label>
            <span>Password </span>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
