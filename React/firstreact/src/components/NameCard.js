import React from "react";

function NameCard(props) {
  return (
    <div
      style={{ border: "solid 2px cyan", width: "80%", margin: "15px auto" }}
      className="NameCard"
    >
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Colour: {props.colour}</p>
    </div>
  );
}
export default NameCard;
