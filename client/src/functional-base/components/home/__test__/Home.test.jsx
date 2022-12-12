import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";

describe("Rendering Home Component", () => {
  test("Title should display as Weather App", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const headingElem = screen.getByText("Weather App");
    expect(headingElem).toBeInTheDocument();
  });

  test("Input should display as Enter country", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const inputElem = screen.getByPlaceholderText("Enter country");
    expect(inputElem).toBeInTheDocument();
  });

  test("Only one Button should desplay and initially should disabled", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const buttonElem = screen.getByDisplayValue("Submit");
    expect(buttonElem).toBeInTheDocument();
    expect(buttonElem).toBeDisabled();
  });

  test("Button should enabled when user search ", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const inputElem = screen.getByPlaceholderText("Enter country");
    const buttonElem = screen.getByDisplayValue("Submit");

    fireEvent.change(inputElem, { target: { value: "india" } });
    expect(inputElem.value).toBe("india");
    expect(buttonElem).not.toBeDisabled();
  });

});
