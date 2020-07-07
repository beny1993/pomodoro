import React, { Component } from "react";

export default class time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 25,
      seconds: "00",
      timer: false,
    };
    this.secondsRemaining = null;
    this.intervalHandler = null;
  }

  tick = () => {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      time: min,
      seconds: sec,
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      });
    }
    if (min < 10) {
      this.setState({
        time: "0" + min,
      });
    }
    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandler);
    }

    this.secondsRemaining--;
  };

  startTimer = () => {
    this.intervalHandler = setInterval(this.tick, 1000);
    let time = this.state.time;
    this.secondsRemaining = time * 60;
    this.setState((prevState) => ({
      ...prevState,
      timer: true,
    }));
  };

  stopTimer = () => {
    clearInterval(this.intervalHandler);
    this.setState({
      timer: false,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ padding: "4rem" }}>
          {this.state.time} : {this.state.seconds}
        </h1>
        <button
          style={{ margin: "0 auto", display: "block" }}
          onClick={this.state.timer ? this.stopTimer : this.startTimer}
        >
          {this.state.timer ? "Pause" : "Start"}
        </button>
      </div>
    );
  }
}
