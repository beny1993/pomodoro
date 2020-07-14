import React from "react";
import Css from "./time.module.css";

export default function button(props) {
  const { states } = props;
  console.log(props);

  return (
    <div>
      <button
        className={Css.button}
        onClick={states.mode ? props.onStop : props.onStart}
      >
        {states.mode ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </button>
    </div>
  );
}
