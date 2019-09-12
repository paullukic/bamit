import React from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";
import app from "../Firebase/base";
import "./Home.css";
import Item from "./Item/Item";

var db = firebase.firestore();

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      data: []
    };
  }

  componentDidMount() {
    db.collection("metal")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ loading: false, data: [data][0] });
      });
  }



  render() {
    const { loading, data } = this.state;
    if (loading) {
      return <p>Ucitavanje...</p>;
    } else {
      return (
        <div className="box2">
          <h1>BAMIT</h1>

          {data.map(({ title, quantity, id }) => (
            <Item key={id} title={title} quantity={quantity}/>
          ))}

          <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
      );
    }
  }
}

export default Home;
