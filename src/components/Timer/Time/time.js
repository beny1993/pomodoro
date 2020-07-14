import React, { Component } from "react";
import Css from "../text.module.css";

export default class time extends Component {
  render() {
    const { states } = this.props;

    return (
      <>
        <div>
          <span className={Css.timer}>
            {states.minutes} : {states.seconds}
          </span>
        </div>
      </>
    );
  }
}
