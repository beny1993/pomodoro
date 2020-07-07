import React, { Component } from "react";
import TimeCounter from "../components/Timer/timeCounter";
import Sound from "../components/Sound/sound";
import Counter from "../components/Counter/counter";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <TimeCounter />
        <Sound />
        <Counter />
      </div>
    );
  }
}
