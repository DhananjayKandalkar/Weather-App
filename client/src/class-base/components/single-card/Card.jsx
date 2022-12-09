import React from "react";
import "./Card.css";




class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {flag, country_name, capital, population, latlng} = this.props
    return (
      <div className="country__card">
        <div className="img__box">
          <img src={flag} alt={country_name} />
        </div>
        <div className="info__box">
          <p>
            <b>Capital : </b>
            {capital}
          </p>
          <p>
            <b>Population : </b>
            {population}
          </p>
          <div className="latlong__box">
            <span>
              <b>Lattitude : </b>
              {latlng[0]}
            </span>
            <span>
              <b>Longitude : </b>
              {latlng[1]}
            </span>
          </div>
        </div>
      </div>
    );
  }
}



export default Card;