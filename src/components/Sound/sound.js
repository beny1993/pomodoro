import React, { Component } from "react";
import Switch from "react-switch";

export default class sound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
  }
  onChangeHandler = (props) => {
    if (this.props.state.play === true) {
      this.props.play();
      this.setState({ checked: false });
    } else {
      this.props.pause();
      this.setState({ checked: true });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Switch
          checked={this.state.checked}
          onChange={this.onChangeHandler}
        ></Switch>
        <audio id="audio">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </div>
    );
  }
}
