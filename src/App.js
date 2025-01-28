import "./App.css";
import { useState } from "react";

function App() {
  /*const [countryInformation, setCountryInformation] = useState
  const apiurl https://restcountries.com/v3.1/name/canada

  const fetchCountryInformation = (canada)
    fetch(apiurl + country) =>
       .then(response => response.json())
      .then(data => {
        const countryData = data[1];
        setCountryInfo(countryData);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
        setCountryInfo(null);
      });
  };

  return (
    <div className="App">
      /* <div>
        <button >Canada</button>
        <button onClick={handleThailandClick}>Thailand</button>
        <button onClick={handleSpainClick}>Spain</button>
      </div>*/

  return (
    <div className="App">
      <header className="Section">
        <div className="button-container">
          <button className="canada-button">
            Canada
          </button>
          <button className="thailand-button">Thailand</button>
          <button className="spain-button">Spain</button>
        </div>
        <div className="container">
          <div className="country-column">Country</div>
          <div className="currency-column">Currency</div>
          <div className="coat-column">Coat of Arms</div>
          <div className="flag-column">Flag</div>
        </div>
      </header>
    </div>
  );
}
export default App;
