import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CountryInfo.css";
import WeatherInfo from "../weather-info/WeatherInfo";
import Card from "../single-card/Card";

const CountryInfo = () => {
  const { country } = useParams();
  const [singleCountry, setSingleCountry] = useState([]);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const getCountryInfo = () => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((response) => response.json())
      .then((json) => setSingleCountry(json))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getCountryInfo();
  }, []);

  const handleWeather = () => {
    setToggle(() => !toggle);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="country__container">
      <div>
        <h1>Country Information Page</h1>
      </div>
      <div className="country__card_box">
        {singleCountry?.map((elem, index) => {
          return <Card key={index + 1} {...elem} country_name={country} />;
        })}
      </div>
      <div className="weather__info_button">
        <button onClick={handleWeather}>
          {toggle ? "Close Weather" : "Capital Weather"}
        </button>
      </div>
      <div className="weather__info_container">
        {toggle
          ? singleCountry?.map((elem, index) => {
              if (elem.capital) {
                return (
                  <WeatherInfo
                    key={index + 1}
                    capital_name={elem.capital}
                    country_name={country}
                  />
                );
              }
            })
          : ""}
      </div>
      <div className="go__back_button">
        <button onClick={handleBack}>Go Back</button>
      </div>
    </div>
  );
};

export default CountryInfo;
