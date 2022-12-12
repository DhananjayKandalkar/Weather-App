import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({
  name = "",
  main = {},
  sys = {},
  weather = [],
  wind = {},
  country_name = "",
}) => {
  const { humidity, pressure, sea_level, temp_max, temp_min } = main;
  const { sunrise, sunset } = sys;
  const { deg, speed } = wind;

  return (
    <div className="weather__card">
      <h2>
        City: {name}, {country_name}
      </h2>
      <div className="content__spaces">
        <span>Humidity : {humidity}</span>
        <span>Pressure : {pressure}</span>
      </div>
      <div>
        {weather.map((el) => (
          <div key={el.id} className="content__spaces">
            <p>Weather Status : {el.main}</p>
            <p>Weather Info: {el.description}</p>
          </div>
        ))}
      </div>
      <div className="content__spaces">
        <span>Max Temperature : {temp_max}</span>
        <span>Min Temperature : {temp_min}</span>
      </div>
      <p>From Sea Level : {sea_level}</p>
      <div className="content__spaces">
        <span>Sunrise : {sunrise}</span>
        <span>Sunset : {sunset}</span>
      </div>
      <div className="content__spaces">
        <span>Wind ::</span>
        <span>deg : {deg}</span>
        <span>Speed : {speed}</span>
      </div>
    </div>
  );
};

export default WeatherCard;
