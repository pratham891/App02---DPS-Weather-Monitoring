import React from 'react';

const WeatherSummary = ({ weatherData, unit, convertTemp }) => {
  if (!weatherData || !weatherData.list || !weatherData.list[0]) {
    return <div>No weather data available.</div>;
  }

  const { temp_min, temp_max } = weatherData.list[0].main;
  const avgTemp = (temp_min + temp_max) / 2;

  return (
    <div className="weather-summary">
      <h5>Weather Summary</h5>
      <div className="temp-avg">Avg Temp: {convertTemp(avgTemp, unit)}° {unit}</div>
      <div className="temp-min">Min Temp: {convertTemp(temp_min, unit)}° {unit}</div>
      <div className="temp-max">Max Temp: {convertTemp(temp_max, unit)}° {unit}</div>
    </div>
  );
};

export default WeatherSummary;
