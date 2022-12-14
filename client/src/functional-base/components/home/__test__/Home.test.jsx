import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";

const onSubmit = jest.fn();

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Rendering Home Component", () => {
  test("Initially Home component should render default", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

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

  test("form submit click function get called", () => {
    render(
      <BrowserRouter>
        <Home onSubmit={onSubmit} />
      </BrowserRouter>
    );

    const inpElem = screen.getByPlaceholderText(/Enter country/i);
    const inpValue = "india";
    const formElem = screen.getByText("Submit");

    fireEvent.change(inpElem, { target: { value: inpValue } });
    fireEvent.click(formElem);

    expect(onSubmit).toHaveBeenCalled();
  });

  test("After submit click should navigate to the page", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const inpElem = screen.getByPlaceholderText(/Enter country/i);
    const inpValue = "india";
    const formElem = screen.getByText("Submit");

    fireEvent.change(inpElem, { target: { value: inpValue } });
    fireEvent.click(formElem);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });

  test("alerts on submit click", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const inpElem = screen.getByPlaceholderText(/Enter country/i);
    const inpValue = "india";
    const formElem = screen.getByText("Submit");

    fireEvent.change(inpElem, { target: { value: inpValue } });
    fireEvent.click(formElem);

    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
