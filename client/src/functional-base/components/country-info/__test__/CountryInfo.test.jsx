import { render, screen, fireEvent } from "@testing-library/react";
import CountryInfo from "../CountryInfo";
import { BrowserRouter } from "react-router-dom";


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


test("WHEN CountryInfo component renders THEN title should display as Country Information Page", () => {
  render(
    <BrowserRouter>
      <CountryInfo />
    </BrowserRouter>
  );
  const headingElem = screen.getByText("Country Information Page");
  expect(headingElem).toBeInTheDocument();
});

test("WHEN Capital Weather Button clicked THEN title should changed to Close Weather and again clicked it should regain to default", () => {
  render(
    <BrowserRouter>
      <CountryInfo />
    </BrowserRouter>
  );
  const buttonElem = screen.getByRole("button", { name: "Capital Weather" });

  fireEvent.click(buttonElem);
  expect(buttonElem).toHaveTextContent("Close Weather");

  fireEvent.click(buttonElem);
  expect(buttonElem).toHaveTextContent("Capital Weather");
});


test("After Go back click should navigate to the page", () => {
  render(
    <BrowserRouter>
      <CountryInfo />
    </BrowserRouter>
  );
  const buttonElem = screen.getByRole("button", {name: "Go Back"})

  fireEvent.click(buttonElem);
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
});