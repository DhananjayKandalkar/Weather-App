import React, { useState, useEffect } from "react";
import "./WeatherInfo.css";
import WeatherCard from "../single-card/WeatherCard";

const WeatherInfo = ({ capital_name, country_name }) => {
  const [weatherData, setWeatherData] = useState({});

  const getWeatherInfo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital_name}&appid=27ffc44c2332074dfe6f53f108ffe342`
    )
      .then((response) => response.json())
      .then((json) => {
        setWeatherData(json);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="weather__info_box">
      {weatherData.name ? (
        <div data-testid="weather-display-check">
          <WeatherCard {...weatherData} country_name={country_name} />
        </div>
      ) : (
        <div>
          <h3 data-testid="weather-unavailable-check">{`Data not available for ${capital_name}`}</h3>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
