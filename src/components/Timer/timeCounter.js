import React, { Component } from "react";
import Circle from "../Timer/Time/circle";
import Time from "../Timer/Time/time";
import Counter from "../../components/Counter/counter";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      seconds: "00",
      minutes: "00",
      mode: false,
      breakTime: false,
      shortCounter: "0",
      mainCounter: "0",
      text: "",
    };
    this.intervalHandler = null;
  }
  tick = (props) => {
    let newTime = this.state.time;
    var min = Math.floor(newTime / 60);
    var sec = newTime % 60;
    newTime--;

    this.setState({
      time: newTime,
      minutes: min,
      seconds: sec,
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      });
    }
    if (min < 10) {
      this.setState({
        minutes: "0" + min,
      });
    }
    if (min === 0 && sec === 0) {
      this.props.play();
      this.counter();
    }
  };

  startTimer = () => {
    this.intervalHandler = setInterval(() => this.tick(), 1000);
    this.setState({
      time: 15,
      breakTime: true,
      mode: true,
      text: "Focus",
    });
  };

  stopTimer = () => {
    clearInterval(this.intervalHandler);
    this.setState({
      seconds: this.state.seconds,
      mode: false,
    });
  };

  counter = () => {
    if (this.state.breakTime === true) {
      clearInterval(this.intervalHandler);

      if (this.state.shortCounter <= 3) {
        this.startShortBreak();
      } else if (this.state.shortCounter > 4) {
        this.startLongBreak();
      }
    } else {
      clearInterval(this.intervalHandler);
      this.startTimer();
    }
  };

  startShortBreak = () => {
    this.intervalHandler = setInterval(() => this.tick(), 1000);
    let addShortBreak = this.state.shortCounter;
    this.setState((prev) => ({
      ...prev,
      time: 10,

      shortCounter: addShortBreak++,
      mode: true,
      breakTime: false,
      text: "Rest Time",
    }));
  };
  startLongBreak = () => {
    this.intervalHandler = setInterval(() => this.tick(), 1000);
    let addLongBreak = this.state.longBreak;
    this.setState({
      time: 30,
      longBreak: addLongBreak++,
      shortCounter: 0,
      breakTime: false,
      text: "Long Break",
    });
  };

  render() {
    return (
      <>
        <Circle>
          <Time
            states={this.state}
            onStart={this.startTimer}
            onStop={this.stopTimer}
          />
          <h4>{this.state.text}</h4>
        </Circle>
        <Counter state={this.state} />
      </>
    );
  }
}
