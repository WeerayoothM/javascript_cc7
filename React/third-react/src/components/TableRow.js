import React, { Component } from "react";

export default class TableRow extends Component {
  bgColor = ["#D9F1f1", "#FAF1D6", "#FDAFAB"];
  state = {
    bgColor: this.bgColor[this.props.bgColor], //bgColor[this.props.bgColor],
  };

  render() {
    console.log("[Table.js] render");
    return (
      <tr
        // onClick={() => this.setState({ bgColor: "#FDAFAB" })}
        // onDoubleClick={() => this.setState({ bgColor: "#FAF1D6" })}
        // onMouseOver={() => this.setState({ bgColor: "#FAF1D6" })}
        // onMouseLeave={() => this.setState({ bgColor: "#D9F1f1" })}
        style={{
          cursor: "pointer",
          backgroundColor: this.state.bgColor,
        }}
      >
        <td>
          {this.props.name}
          {this.props.key}
        </td>
        <td>{this.props.email}</td>
        <td>{this.props.age}</td>
        <td>
          <button
            onClick={() =>
              this.props.setName(`This name is ${this.props.name}`)
            }
            onDoubleClick={() => this.props.setName(this.props.email)}
          >
            Call my name
          </button>
        </td>
      </tr>
    );
  }
}
