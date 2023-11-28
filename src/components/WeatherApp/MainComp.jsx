import React, { useState } from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';

const WeatherMain = () => {
  const [weatherData, setWeatherData] = useState({
    longitude: undefined,
    latitude: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    error: undefined,
  });

  const getWeather = async (e) => {
    e.preventDefault();
    const longitude = e.target.elements.longitude.value;
    const latitude = e.target.elements.latitude.value;

    try {
      const api_call = await fetch(
        `https://fcc-weather-api.glitch.me/api/current?lon=${longitude}&lat=${latitude}`,
        { method: 'get' }
      );
      const data = await api_call.json();

      if (longitude && latitude) {
        setWeatherData({
          longitude: data.coord.lon,
          latitude: data.coord.lat,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          wind: data.wind.speed,
          error: '',
        });
      } else {
        setWeatherData({
          longitude: undefined,
          latitude: undefined,
          temperature: undefined,
          humidity: undefined,
          description: undefined,
          wind: undefined,
          error: 'Please Enter the values',
        });
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData({
        ...weatherData,
        error: 'Error fetching weather data',
      });
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container shadow">
            <div className="row">
              <div className="col-sm-5 title-container">
                <Titles />
              </div>
              <div className="col-sm-7 form-container">
                <Form getWeather={getWeather} />
                <Weather
                  longitude={weatherData.longitude}
                  latitude={weatherData.latitude}
                  temperature={weatherData.temperature}
                  humidity={weatherData.humidity}
                  description={weatherData.description}
                  wind={weatherData.wind}
                  error={weatherData.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMain;
