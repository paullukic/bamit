import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { AuthProvider } from "./Firebase/Auth";
import PrivateRoute from "./Firebase/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;