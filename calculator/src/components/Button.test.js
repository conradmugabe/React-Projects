import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

it("renders button without crashing", () => {
  const div = document.createElement("div");
  const buttonDetails = { hide: false };
  ReactDOM.render(<Button buttonDetails={buttonDetails} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders button correctly", () => {});
