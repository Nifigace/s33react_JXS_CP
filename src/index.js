import React from "react";
import ReactDOM from "react-dom";

const fName = "Roman";
const lName = "Lisyuk";
const num = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Names</h1>
    <p>
      Hello {`${fName} ${lName}`} your lucky number is {num}
    </p>
    <p></p>
  </div>,
  document.getElementById("root")
);
