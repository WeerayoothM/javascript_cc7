import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.addCounter = this.addCounter.bind(this);
    this.subtractCounter = this.subtractCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  addCounter() {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  }

  subtractCounter() {
    // update counter state
    this.setState((state) => {
      return {
        counter: state.counter - 1,
      };
    });
  }

  resetCounter() {
    this.setState(() => {
      return {
        counter: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.addCounter}>+</button>
        <button onClick={this.subtractCounter}>-</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}
export default Counter;
