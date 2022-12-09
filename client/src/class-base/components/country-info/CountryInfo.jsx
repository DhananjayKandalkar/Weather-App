import React from "react";
import axios from "axios";
import WeatherInfo from "../weather-info/WeatherInfo";
import Card from "../single-card/Card";
import WithRouter from "../with-router/WithRouter";
import "./CountryInfo.css";

class CountryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleCountry: [],
      toggle: false,
    };
    this.handleWeather = this.handleWeather.bind(this);
    this.handleBack=this.handleBack.bind(this)
  }

  componentDidMount() {
    const { country } = this.props.params;
    this.getCountryInfo(country);
  }

  getCountryInfo(country){
    axios
      .get(`https://restcountries.com/v2/name/${country}`)
      .then((response) => this.setState({ singleCountry: response.data }))
      .catch((error) => console.log(error.message));
  };

  handleWeather() {
    this.setState({ toggle: !this.state.toggle });
  }
  
  handleBack(){
    this.props.navigate(-1)
  }

  render() {
    const { country } = this.props.params;
    const { toggle, singleCountry } = this.state;

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
          <button onClick={this.handleWeather}>
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
          <button onClick={this.handleBack}>Go back</button>
        </div>
      </div>
    );
  }
}

export default WithRouter(CountryInfo);
