import React, { Component } from "react";
import Circle from "../Timer/Time/circle";
import Time from "../Timer/Time/time";

export default class index extends Component {
  render() {
    return (
      <>
        <Circle>
          <Time />
        </Circle>
      </>
    );
  }
}
