import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";

test("WHEN component renders THEN title should display as Weather App", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElem = screen.getByText("Weather App");
  expect(headingElem).toBeInTheDocument();
});

test("WHEN component renders THEN Input should display as Enter country", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const inputElem = screen.getByPlaceholderText("Enter country");
  expect(inputElem).toBeInTheDocument();
});

test("Only one Button should desplay and initially should disabled", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const inputElem = screen.getByDisplayValue("Submit");
  expect(inputElem).toBeInTheDocument();
  expect(inputElem).toBeDisabled();
});
