import React from "react";
import ReactDOM from "react-dom";
import ButtonContainer from "./ButtonContainer";

it("renders buttonContainer without crashing", () => {
  const div = document.createElement("div");
  const enterBtn = () => {};
  const clear = () => {};
  const equate = () => {};
  const actions = { enterBtn, clear, equate };
  ReactDOM.render(<ButtonContainer actions={actions} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
