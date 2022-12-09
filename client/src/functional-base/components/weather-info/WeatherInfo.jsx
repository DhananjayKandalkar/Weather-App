import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherInfo.css";
import WeatherCard from "../single-card/WeatherCard";

const WeatherInfo = ({ capital_name, country_name }) => {
  const [weatherData, setWeatherData] = useState({});

  const getWeatherInfo = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital_name}&appid=27ffc44c2332074dfe6f53f108ffe342`
      )
      .then((response) => {
        response.status === 200
          ? setWeatherData(response.data)
          : setWeatherData({});
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="weather__info_box">
      {weatherData.name ? (
        <WeatherCard {...weatherData} country_name={country_name} />
      ) : (
        <h3>{`Data not available for ${capital_name}`}</h3>
      )}
    </div>
  );
};

export default WeatherInfo;
