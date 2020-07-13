import React, { Component } from "react";
import Css from "./time.module.css";

export default class time extends Component {
  render() {
    const { states } = this.props;

    return (
      <>
        <div>
          <h1 style={{ padding: "4rem" }}>
            {states.minutes} : {states.seconds}
          </h1>
          <button
            className={Css.button}
            onClick={states.mode ? this.props.onStop : this.props.onStart}
          >
            {states.mode ? (
              <i className="fas fa-pause"></i>
            ) : (
              <i className="fas fa-play"></i>
            )}
          </button>
        </div>
      </>
    );
  }
}
