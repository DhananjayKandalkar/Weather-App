import React from "react"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./functional-base/components/home/Home";
import CountryInfo from "./functional-base/components/country-info/CountryInfo";
// import Home from "./class-base/components/home/Home";
// import CountryInfo from "./class-base/components/country-info/CountryInfo";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countrydetails/:country" element={<CountryInfo />} />
      </Routes>
    </div>
  );
};



// class base

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/countrydetails/:country" element={<CountryInfo />} />
//         </Routes>
//       </div>
//     );
//   }
// }


export default App;