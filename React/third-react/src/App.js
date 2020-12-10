import React, { Component } from "react";
import "./App.css";
import TableRow from "./components/TableRow";
import { member } from "./member";

class App extends React.Component {
  constructor(props) {
    super();
    console.log("[App.js] Contructor");
    this.state = {
      member: [...member],
      isShow: true,
      announcement: "This is announcement",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
  componentDidMount() {
    console.log("[App.js] componentDidmount");
  }
  setName = (name) => {
    this.setState({ announcement: name });
  };
  render() {
    console.log("[App.js] render");
    const isShow = this.state.isShow;
    return (
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "150px",
            position: "fixed",
            top: "0px",
            left: "0px",
            backgroundColor: "white",
            // display: "flex",
          }}
        >
          <h1>{this.state.announcement}</h1>
          <input
            // style={{
            //   fontSix: "100%",}}
            placeholder={this.state.announcement}
            value={this.state.announcement}
            onChange={(e) => this.setState({ announcement: e.target.value })}
          />
          <button onClick={() => this.setState({ announcement: "" })}>
            Reset
          </button>
          <button onClick={() => this.setState({ isShow: !isShow })}>
            Hide
          </button>
        </div>
        {isShow && (
          <table style={{ width: "100%", marginTop: "150px" }}>
            <thead>
              <tr style={{ backgroundColor: "" }}>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Announcement</th>
              </tr>
            </thead>
            <tbody>
              {this.state.member.map(({ name, email, age }, idx) => (
                // if (this.state.color%3 ===0)
                <TableRow
                  bgColor={idx % 3}
                  key={idx}
                  name={name}
                  email={email}
                  age={age}
                  setName={this.setName}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default App;
