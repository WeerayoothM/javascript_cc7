import React, { Component } from "react";
import "./App.css";
import TabComponent from "./components/TabComponent";
import Carousel from "./components/Carousel";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import ClockAns from "./components/ClockAns";
import Todolist from "./components/Todolist";
class App extends Component {
  state = {
    content: "",
  };
  render() {
    return (
      <div className="App">
        <Todolist />

        <div style={{ height: "100vh" }}></div>
        <Clock location="Bangkok" cn="clock btn btn-primary" />
        <Clock location="Newyork" cn="clock btn btn-secondary" />
        <Clock location="London" cn="clock btn btn-success" />
        <ClockAns location="London" cn="clock btn btn-danger" />
        <Counter />
        <br />
        <br />
        <Carousel />
        <br />
        <br />
        <br />
        <br />
        <TabComponent
          tabname="Dog"
          setContent={(e) => this.setState({ content: e })}
          content="Dog1 ieie"
        />
        <TabComponent
          tabname="Cat"
          content="Cat2"
          setContent={(e) => this.setState({ content: e })}
        />
        <TabComponent
          tabname="Fish"
          content="Fish3"
          setContent={(e) => this.setState({ content: e })}
        />
        <br />
        <br />
        <div
          className="content"
          style={{
            margin: "0 auto",
            width: "90%",
            height: "400px",
            border: "solid red",
            fontSize: "2rem",
          }}
        >
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default App;
