import React from "react";
import "./Card.css";


const Card = ({ capital, population, latlng, flag, country_name }) => {
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
};

export default Card;
