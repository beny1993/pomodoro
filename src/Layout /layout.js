import React from "react";
import TimeCounter from "../components/Timer/timeCounter";
import Sound from "../components/Sound/sound";
import Counter from "../components/Counter/counter";

export default function Layout() {
  return (
    <div>
      <TimeCounter />
      <Sound />
      <Counter />
    </div>
  );
}
