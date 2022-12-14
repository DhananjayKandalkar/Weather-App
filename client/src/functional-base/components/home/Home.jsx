import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const handleSubmit = (e, inpValue, navigate) => {
  e.preventDefault();

  alert("Are you sure to go")
  if (inpValue !== "") {
    navigate(`/countrydetails/${inpValue}`);
  } 
};


const Home = ({onSubmit=handleSubmit}) => {
  const [inpValue, setInpValue] = useState("");
  const navigate = useNavigate();

  return (
    <div className="form__container">
      <div>
        <h1>Weather App</h1>
      </div>
      <form data-testid="form-submission" onSubmit={(e) => onSubmit(e, inpValue, navigate)} className="form">
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