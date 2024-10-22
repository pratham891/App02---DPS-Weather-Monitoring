import React from 'react';

const WeatherForecast = ({ weatherData, unit, convertTemp }) => {
  if (!weatherData || !weatherData.list) {
    return <div>No weather data available.</div>;
  }

  return (
    <div className="weather-forecast">
      <h5>Weather Forecast</h5>
      <div className="boxes">
        {[6, 12, 18, 24, 30].map(index => (
          <div className="box" key={index}>
            <img src={`https://openweathermap.org/img/wn/${weatherData.list[index].weather[0].icon}.png`} alt="" className={`icon${index}`} />
            <div className={`temp${index}`}>{convertTemp(weatherData.list[index].main.temp, unit)}° {unit}</div>
            <div className={`dt${index} ddt`}>{weatherData.list[index].dt_txt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
