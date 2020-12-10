import React, { Component } from "react";

class Clock extends Component {
  state = {
    today: new Date(),
  };
  componentDidMount() {
    this.interval = setInterval(() => this.setTime(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  setTime = () => {
    let newDate = new Date();
    console.log("ieie");
    this.setState({ today: newDate });
  };
  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  render() {
    let locationTime = {
      Bangkok: 0,
      Newyork: -11,
      London: +6,
    };
    return (
      <div>
        <div className={this.props.cn}>
          {this.props.location}
          <br />
          {`${this.checkTime(
            this.state.today.getHours() + locationTime[this.props.location]
          )} : 
          ${this.checkTime(this.state.today.getMinutes())} : 
          ${this.checkTime(this.state.today.getSeconds())}`}
        </div>
      </div>
    );
  }
}

export default Clock;
