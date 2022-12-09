import React from "react";
import WithRouter from "../with-router/WithRouter"
import "./Home.css";



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inpValue: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    if (this.state.inpValue !== "") {
      this.props.navigate(`/countrydetails/${this.state.inpValue}`);
    } else {
      alert("Please enter country name");
    }
  }

  render() {
    return (
      <div className="form__container">
        <div>
          <h1>Weather App</h1>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)} className="form">
          <div>
            <input
              onChange={(e) => this.setState({inpValue: e.target.value})}
              type="text"
              placeholder="Enter country"
              value={this.state.inpValue}
            />
            <input disabled={this.state.inpValue === ""} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}



export default WithRouter(Home);