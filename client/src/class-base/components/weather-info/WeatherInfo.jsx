import React from "react";
import axios from "axios";
import WeatherCard from "../single-card/WeatherCard";
import "./WeatherInfo.css";



class WeatherInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
    };
  }
  componentDidMount(){
    this.getWeatherInfo()
  }

  getWeatherInfo() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.props.capital_name}&appid=27ffc44c2332074dfe6f53f108ffe342`
      )
      .then((response) => {
        response.status === 200
          ? this.setState({weatherData: response.data})
          : this.setState({weatherData: {}});
      })
      .catch((error) => console.log(error.message));
  }

  render() {
    const {weatherData} = this.state
    return (
      <div className="weather__info_box">
        {weatherData.name ? (
          <WeatherCard {...weatherData} country_name={this.props.country_name} />
        ) : (
          <h3>{`Data not available for ${this.props.capital_name}`}</h3>
        )}
      </div>
    );
  }
}


export default WeatherInfo;