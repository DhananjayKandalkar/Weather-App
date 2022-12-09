import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";



const Home = () => {
  const [inpValue, setInpValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inpValue !== "") {
      navigate(`/countrydetails/${inpValue}`);
    } else {
      alert("Please enter country name");
    }
  };

  return (
    <div className="form__container">
      <div>
        <h1>Weather App</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div>
          <input
            onChange={(e) => setInpValue(e.target.value)}
            type="text"
            placeholder="Enter country"
            value={inpValue}
          />
          <input disabled={inpValue === ""} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Home;
