import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counterValue: 0,
  };
  increment = () => {
    this.setState({ counterValue: this.state.counterValue + 1 });
  };
  decrement = () => {
    this.setState({ counterValue: this.state.counterValue - 1 });
  };

  render() {
    let btnStyle = { width: "50px", height: "50px" };
    let checkZero = this.state.counterValue === 0 ? true : false;
    return (
      <div className="App">
        {/* <input
          onChange={(e) => {
            this.setState({ inputValue: e.target.value });
          }}
          style={{ width: "400px", height: "50px", fontSize: "40px" }}
        /> */}
        {/* <h1>{this.state.counterValue}</h1> */}
        <button style={btnStyle} onClick={() => this.increment()}>
          Up
        </button>
        <h1>{this.state.counterValue}</h1>
        <button
          disabled={checkZero}
          style={btnStyle}
          onClick={() => this.decrement()}
        >
          Down
        </button>
        <button
          style={btnStyle}
          onClick={() => this.setState({ counterValue: 0 })}
        >
          Reset
        </button>
      </div>
    );
  }
}

// class App extends Component {
//   // constructor(props) {
//   //   super();
//   //   this.state = {
//   //     isColorChange: true,
//   // isSizeChange: true,
//   //   };
//   // this.getRandomColor = this.getRandomColor.bind(this);
//   // }

//   state = {
//     isColorChange: true,
//     // isSizeChange: true,
//   };
//   changeBgColor = () => {
//     this.setState({ isColorChange: false });
//   };
//   // changeSizeButton() {
//   //   this.setState({ isSizeChange: false });
//   // }
//   getRandomColor = () => {
//     let rgb = () => {
//       return Math.floor(Math.random() * 256);
//     };
//     return `rgb(  ${rgb()},${rgb()},${rgb()} )`;
//   };

//   render() {
//     let bgColor = this.state.isColorChange ? "#c47856" : this.getRandomColor();
//     let widthBtn = this.state.isColorChange ? "" : "196px";
//     let heightBtn = this.state.isColorChange ? "" : "178px";
//     return (
//       <div
//         className="App"
//         style={{ backgroundColor: bgColor, width: "100vw", height: "100vh" }}
//       >
//         <button
//           onClick={() => {
//             this.changeBgColor();
//             // this.changeSizeButton();
//           }}
//           style={{ width: widthBtn, height: heightBtn }}
//         >
//           ChangeBgColor
//         </button>
//       </div>
//     );
//   }
// }

export default App;
