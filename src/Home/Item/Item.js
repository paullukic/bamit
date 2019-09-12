import React from "react";
import "./Item.css";

const Item = ({ title, quantity, userVariable }) => {
  const add = (item1, item2) => {
    console.log(item1 + item2);
  };

  const sub = (item1, item2) => {
    quantity = item1 - item2;
    console.log(quantity)
  };

  return( 
    <div className="itembox">
      <div className="boxp">
        <p>{title.toUpperCase()} </p>
        <p>| {quantity} kom.</p>
      </div>
      <input
        id="number"
        onChange={evt => {userVariable = Number(evt.target.value);}}
        className="input"
      />
      <button
        onClick={() => add(Number(quantity), userVariable)}
        className="button"
      > + </button>
      <button onClick={() => sub(Number(quantity), userVariable)}> - </button>
    </div>
  );
};

export default Item;
