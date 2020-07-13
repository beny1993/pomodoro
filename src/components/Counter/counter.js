import React from "react";
import Css from "./counter.module.css";

export default function index(props) {
  const { shortCounter, mainCounter } = props.state;

  return (
    <div className={Css.div}>
      <h4>Round</h4>
      <span className={Css.font}>
        {shortCounter} / {mainCounter}
      </span>
    </div>
  );
}
