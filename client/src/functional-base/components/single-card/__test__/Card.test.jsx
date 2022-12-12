import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../Card";

const mock_props = {
    capital: "Delhi",
    population: 32065760,
    latlng: [28.7041, 77.1025],
    flag : 'https://flagcdn.com/in.svg',
    country_name: "india"
}

describe("Single Country Card", () => {
    test("card component should render", () => {
        render(
          <Card {...mock_props}/>
        );
    });


    test("card component should render the props passed", () => {
        render(
          <Card {...mock_props}/>
        );

        const imgElem = screen.getByRole("img")
        const capitalElem = screen.getByText("Capital :")
        const populationElem = screen.getByText("Population :")
        const latElem = screen.getByText("Lattitude :")
        const longElem = screen.getByText("Longitude :")

        expect(imgElem).toBeVisible()
        expect(capitalElem).toBeVisible()
        expect(populationElem).toBeVisible()
        expect(latElem).toBeVisible()
        expect(longElem).toBeVisible()
    });
})