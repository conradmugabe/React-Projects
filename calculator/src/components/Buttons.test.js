import React from "react";
import ReactDOM from "react-dom";
import Buttons from "./Buttons";

it("renders buttons without crashing", () => {
  const div = document.createElement("div");
  const btnList = [{ hide: false }, { hide: true }];
  const enterBtn = () => {};
  const clear = () => {};
  const equate = () => {};
  const actions = { enterBtn, clear, equate };
  ReactDOM.render(<Buttons btnList={btnList} actions={actions} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
