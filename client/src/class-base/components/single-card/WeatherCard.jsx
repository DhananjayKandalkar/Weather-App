import React from "react";
import "./WeatherCard.css";




class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, main, sys, weather, wind, country_name} = this.props

    const { humidity, pressure, sea_level, temp_max, temp_min } = main;
    const { sunrise, sunset } = sys;
    const { deg, speed } = wind;

    return (
      <div className="weather__card">
        <h2>
          City: {name}, {country_name}
        </h2>
        <div className="content__spaces">
          <span>
            <b>Humidity : </b> {humidity}
          </span>
          <span>
            <b>Pressure : </b> {pressure}
          </span>
        </div>
        <div>
          {weather.map((el) => (
            <div key={el.id} className="content__spaces">
              <p>
                <b>Weather Status : </b> {el.main}
              </p>
              <p>
                <b>Weather Info: </b> {el.description}
              </p>
            </div>
          ))}
        </div>
        <div className="content__spaces">
          <span>
            <b>Max Temperature : </b> {temp_max}
          </span>
          <span>
            <b>Min Temperature : </b> {temp_min}
          </span>
        </div>
        <p>
          <b>From Sea Level : </b> {sea_level}
        </p>
        <div className="content__spaces">
          <span>
            <b>Sunrise : </b> {sunrise}
          </span>
          <span>
            <b>Sunset : </b> {sunset}
          </span>
        </div>
        <div className="content__spaces">
          <span>
            <b> Wind :: </b>
          </span>
          <span>
            <b>deg : </b> {deg}
          </span>
          <span>
            <b>Speed : </b> {speed}
          </span>
        </div>
      </div>
    );
  }
}


export default WeatherCard;