import React from "react";
import ReactDOM from "react-dom";
import InputContainer from "./InputContainer";

it("renders inputContainer without crashing", () => {
  const div = document.createElement("div");
  // const buttonDetails = { hide: false };
  ReactDOM.render(<InputContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
