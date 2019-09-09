import React from "react";
import app from "../Firebase/base";
import './Home.css'

const Home = () => {
  return (
    <div className='box'>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;