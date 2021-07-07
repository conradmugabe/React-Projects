import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";
import { render, fireEvent } from "@testing-library/react";

it("renders Calculator without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("addition works", () => {
  const { getByText, getByTestId } = render(<Calculator />);

  const button1 = getByText("1");
  const button2 = getByText("2");
  const button_add = getByText("+");
  const answer = getByTestId("answer");

  fireEvent.click(button1);
  fireEvent.click(button_add);
  fireEvent.click(button2);

  expect(answer).toBe("3");
});
