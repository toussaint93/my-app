import "./App.css";
import { useState } from "react";

function App() {
  const [countryInformation, setCountryInformation] = useState([]);
  const apiurl = "https://restcountries.com/v3.1/name/canada";

  const fetchCountryInformation = (country) => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountryInformation(data[0]);
      });
  };

  return (
    <div className="App">
      <header className="Section">
        <div className="button-container">
          <button
            className="canada-button"
            onClick={fetchCountryInformation("canada")}
          >
            Canada
          </button>
          <button
            className="thailand-button"
            onClick={fetchCountryInformation("thailand")}
          >
            Thailand
          </button>
          <button
            className="spain-button"
            onClick={fetchCountryInformation("spain")}
          >
            Spain
          </button>
        </div>
        <div className="container">
          <div className="country-column">country</div>
          <div className="currency-column">Currency</div>
          <div className="coat-column">Coat of Arms</div>
          <div className="flag-column">Flag</div>
        </div>
      </header>
    </div>
  );
}
export default App;
