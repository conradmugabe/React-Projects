import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders Calculator without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("addition works", () => {
  const { getByText, getByTestId } = render(<Calculator />);

  const button1 = getByText("1");
  const button2 = getByText("2");
  const button_add = getByText("+");
  const butotn_equals = getByText("=");
  const answer = getByTestId("answer");

  expect(answer).toHaveTextContent("");

  fireEvent.click(button1);
  fireEvent.click(button_add);
  fireEvent.click(button2);
  fireEvent.click(butotn_equals);

  expect(answer).toHaveTextContent("3");
});

it("button and input work", () => {
  const { getByText, getByTestId } = render(<Calculator />);

  const button_log = getByText("log");
  const input = getByTestId("calc_input");

  fireEvent.click(button_log);

  expect(input).toHaveValue("log(");
});

it("clearing number input works", () => {
  const { getByText, getByTestId } = render(<Calculator />);

  const button_clear = getByText("C");
  const input = getByTestId("calc_input");

  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("2"));

  expect(input).toHaveValue("222");

  fireEvent.click(button_clear);
  expect(input).toHaveValue("");
});
