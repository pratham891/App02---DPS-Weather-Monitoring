import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import WeatherSummary from './components/WeatherSummary';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Bangalore');
  const [unit, setUnit] = useState('metric');

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, [city, unit]);

  const convertTemp = (temp, unit) => {
    if (unit === 'imperial') return ((temp * 9 / 5) + 32).toFixed(2);
    else if (unit === 'standard') return (temp + 273.15).toFixed(2);
    else return temp.toFixed(2);
  };

  return (
    <div className="App">
      <div id="dropdown" style={{ marginBottom: "10px" }} >
        <select onChange={e => setUnit(e.target.value)} value={unit} className="dropkey">
          <option value="metric">°Celsius</option>
          <option value="standard">Kelvin</option>
          <option value="imperial">°Fahrenheit</option>
        </select>
      </div>
      <SearchBar setCity={setCity} />
      <div className="weather-container">
        <WeatherInfo weatherData={weatherData} unit={unit} convertTemp={convertTemp} />
        <WeatherSummary weatherData={weatherData} unit={unit} convertTemp={convertTemp} />
      </div>
    </div>
  );
}

export default App;
