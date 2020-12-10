import React from "react";
import "./App.css";
// import NameCard from "./components/NameCard";
import PersonCard from "./components/PersonCard";

// export default function App() {
//   return React.createElement("div", {}, [
//     React.createElement("p", {}, "Google"),
//     React.createElement("h2", {}, "Hello"),
//     React.createElement("ul", {}, [
//       "Todo List",
//       React.createElement("li", {}, "Do Homework"),
//       React.createElement("li", {}, "Do Housework"),
//     ]),
//     React.createElement("input", { value: "Sonter" }, null),
//   ]);
// }

class App extends React.Component {
  state = {
    inputValue: "",
    isWhite: true,
    isShow: true,
    ischeck: true,
    student: [
      {
        name: "Cake",
        age: 19,
        colour: "Black",
      },
      {
        name: "Pup",
        age: 26,
        colour: "Blue",
      },
      {
        name: "Ohm",
        age: 23,
        colour: "Crimson",
      },
    ],
  };

  changeIsWhite() {
    this.setState({ isWhite: false });
  }
  changeBgColor = () => {
    this.setState({ isColorChange: false });
  };
  getRandomColor = () => {
    let rgb = () => {
      return Math.floor(Math.random() * 256);
    };
    return `rgb(  ${rgb()},${rgb()},${rgb()} )`;
  };
  render() {
    let { isShow } = this.state;
    let bgColor = this.state.isWhite ? "#c47856" : this.getRandomColor();
    const studentList = this.state.student;
    return (
      <div className="App">
        <img
          src="./img/IMG_8058.jpg"
          alt="firstpic"
          width="300px"
          height="100px"
        />
        <input
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
        <button onClick={() => this.setState({ ischeck: false })}>C</button>
        <button onClick={() => this.changeIsWhite()}>Change Colour</button>
        <h1>{this.state.inputValue}</h1>
        <button onClick={() => this.setState({ isShow: !isShow })}>
          Hide Student
        </button>
        {isShow
          ? studentList.map(({ name, age, colour }, idx) => (
              <PersonCard key={idx} name={name} age={age} colour={colour} />
            ))
          : null}

        {isShow
          ? [
              <PersonCard key={1} name="Cake" age={19} colour="Black" />,
              <PersonCard key={2} name="Pup" age={29} colour="Blue" />,
              <PersonCard key={3} name="Koi" age={39} colour="Pink" />,
              <PersonCard key={4} name="Ohm" age={23} colour="Crimson" />,
            ]
          : null}
      </div>
    );
  }
}
export default App;
