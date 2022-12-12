import { render, screen} from "@testing-library/react";
import WeatherInfo from "../WeatherInfo";


const mock_props = {
    capital_name: "Lima",
    country_name: "Peru"
}

describe("Weather Information", () => {
    test("WeatherInfo component should render", () => {
        render(
          <WeatherInfo {...mock_props} />
        );
    });

    test("Weather card should display only data fetch by capital name returns", async () => {
        render(
          <WeatherInfo  {...mock_props} />
        )
        const infoElem = await screen.findByTestId('weather-display-check')
        expect(infoElem).toBeInTheDocument()
    });


    test("WHEN data fetch by capital name fails, THEN error message should be rendered", async () => {
        render(
          <WeatherInfo capital_name= "" country_name= "Peru"/>
        )

        const errorElem = await screen.findByTestId('weather-unavailable-check')
        expect(errorElem).toBeInTheDocument()
        expect(errorElem).toHaveTextContent('Data not available for')
    });



    test("data fetch by wrong capital name should show the error", async () => {
        render(
          <WeatherInfo capital_name= "sadsdsd" country_name= "Peru"/>
        )

        const errorElem = await screen.findByTestId('weather-unavailable-check')
        expect(errorElem).toBeInTheDocument()
        expect(errorElem).toHaveTextContent('Data not available for sadsdsd')
    });
})