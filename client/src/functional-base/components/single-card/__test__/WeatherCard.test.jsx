import { render, screen, fireEvent } from "@testing-library/react";
import WeatherCard from "../WeatherCard";

const mock_props = {
  name: "New Delhi",
  main: {
    humidity: 27,
    pressure: "1013",
    sea_level: "1254",
    temp_max: "294.24",
    temp_min: "294.28",
  },
  sys: {
    sunrise: "1670808853",
    sunset: "1670846115",
  },
  weather: [{ id: 721, main: "cloudy", description: "litle bit cloudy" }],
  wind: {
    deg: "300",
    speed: "3.09",
  },
  country_name: "India",
};

describe("Single Weather Card", () => {
  test("weather card component should render", () => {
    render(<WeatherCard {...mock_props} />);
  });

  test("weather card component should render the props passed", () => {
    render(<WeatherCard {...mock_props} />);

    const nameElem = screen.getByText("City:", {exact: false});
    const humiditylElem = screen.getByText("Humidity :", {exact: false});
    const pressureElem = screen.getByText("Pressure :", {exact: false});
    const weatherStatusElem = screen.getByText("Weather Status :", {exact: false});
    const weatherInfoElem = screen.getByText("Weather Info:", {exact: false});
    const maxTempElem = screen.getByText("Max Temperature :", {exact: false});
    const minTempElem = screen.getByText("Min Temperature :", {exact: false});
    const seaLevelElem = screen.getByText("From Sea Level :", {exact: false});
    const sunRiseElem = screen.getByText("Sunrise :", {exact: false});
    const sunSetElem = screen.getByText("Sunset :", {exact: false});
    const windElem = screen.getByText("Wind ::", {exact: false});
    const degElem = screen.getByText("deg :", {exact: false});
    const speedElem = screen.getByText("Speed :", {exact: false});

    
    expect(nameElem).toHaveTextContent("City: New Delhi, India");
    expect(humiditylElem).toHaveTextContent("Humidity : 27");
    expect(pressureElem).toHaveTextContent("Pressure : 1013");
    expect(weatherStatusElem).toHaveTextContent("Weather Status : cloudy");
    expect(weatherInfoElem).toHaveTextContent("Weather Info: litle bit cloudy");
    expect(maxTempElem).toHaveTextContent("Max Temperature : 294.24");
    expect(minTempElem).toHaveTextContent("Min Temperature : 294.28");
    expect(seaLevelElem).toHaveTextContent("From Sea Level : 1254");
    expect(sunRiseElem).toHaveTextContent("Sunrise : 1670808853");
    expect(sunSetElem).toHaveTextContent("Sunset : 1670846115");
    expect(windElem).toHaveTextContent("Wind ::");
    expect(degElem).toHaveTextContent("deg : 300");
    expect(speedElem).toHaveTextContent("Speed : 3.09");
  });
});