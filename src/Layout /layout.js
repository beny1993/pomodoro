import React, { Component } from "react";
import TimeCounter from "../components/Timer/timeCounter";
import Sound from "../components/Sound/sound";

export default class Layout extends Component {
  state = {
    play: false,
  };

  playAudio = () => {
    const audioRing = document.getElementById("audio");
    audioRing.play();
    this.setState({ play: false });
  };
  pauseAudio = () => {
    const audioRing = document.getElementById("audio");
    audioRing.pause();
    this.setState({ play: true });
  };

  render() {
    return (
      <div>
        <TimeCounter play={this.playAudio} />
        <Sound
          state={this.state}
          play={this.playAudio}
          pause={this.pauseAudio}
        />
      </div>
    );
  }
}
