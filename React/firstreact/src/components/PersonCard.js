import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    return (
      <div
        className="PersonCard"
        style={{
          border: "2px solid crimson",
          width: "80%",
          margin: "15px auto",
          backgroundColor: this.props.isWhite ? "white" : "lime",
        }}
      >
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>Colour: {this.props.colour}</p>
      </div>
    );
  }
}

export default PersonCard;
