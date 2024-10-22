import React from 'react';

function WeatherInfo({ weatherData, selectedUnit }) {
  if (!weatherData) return null;

  const { name } = weatherData.city;
  const { icon, description } = weatherData.list[0].weather[0];
  const { temp, feels_like, humidity, temp_min, temp_max } = weatherData.list[0].main;
  const { speed } = weatherData.list[0].wind;
  const datetime = weatherData.list[0].dt_txt;

  const convertTemp = (temp, unit) => {
    if (unit === "F") {
      return ((temp * 9 / 5) + 32).toFixed(2);
    } else if (unit === "K") {
      return (temp + 273.15).toFixed(2);
    } else {
      return temp.toFixed(2);
    }
  };

  return (
    <div className="weather-info">
      <h2 className="city">Weather in {name}</h2>
      <h1 className="temp">{convertTemp(temp, selectedUnit)} °{selectedUnit}</h1>
      <h1 className="temp-feels-like">Feels like: {convertTemp(feels_like, selectedUnit)} °{selectedUnit}</h1>
      <div className="flex">
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="" className="icon" />
        <div className="description">{description}</div>
      </div>
      <p className="dt">Last updated: {datetime}</p>
      <div className="humidity">Humidity: {humidity}%</div>
      <div className="wind">Wind speed: {speed} km/h</div>
    </div>
  );
}

export default WeatherInfo;
