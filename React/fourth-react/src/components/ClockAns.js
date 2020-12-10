import React, { Component } from "react";

class ClockAns extends Component {
  state = {
    today: new Date().getTime() + -6 * 60 * 60 * 1000,
  };
  locationTime = {
    Bangkok: 0,
    Newyork: -11,
    London: -6,
  };
  componentDidMount() {
    this.interval = setInterval(() => this.setTime(), 1000);
  }
  setTime = () => {
    this.setState((prevState) => ({ today: prevState.today + 1000 }));
  };
  render() {
    // alert(new Date(this.state.today));
    return (
      <div>
        <div className={this.props.cn}>
          {this.props.location}
          <br />
          {new Date(this.state.today).toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default ClockAns;
