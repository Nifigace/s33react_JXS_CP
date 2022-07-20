import React from "react";
import ReactDOM from "react-dom";

const name = "Roman";
const num = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Lucky number</h1>
    <p>
      {name}, your lucky number is {num}
    </p>
    <p>if your name was Jack you'll have lucky number {num + 1}</p>
  </div>,
  document.getElementById("root")
);
