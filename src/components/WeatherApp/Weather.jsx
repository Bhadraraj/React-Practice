import React from 'react';

const Weather = ({
  longitude,
  latitude,
  temperature,
  humidity,
  description,
  wind,
  error,
}) => (
  <div className="weather__info">
    {longitude && latitude && (
      <p className="weather__key">
        Location :
        <span className="weather__value">
          {' '}
          {longitude}, {latitude}
        </span>
      </p>
    )}
    {temperature && (
      <p className="weather__key">
        Temperature :
        <span className="weather__value"> {temperature}</span>
      </p>
    )}
    {humidity && (
      <p className="weather__key">
        Humidity :
        <span className="weather__value"> {humidity}</span>
      </p>
    )}
    {description && (
      <p className="weather__key">
        Description :
        <span className="weather__value"> {description}</span>
      </p>
    )}
    {wind && (
      <p className="weather__key">
        Wind :
        <span className="weather__value"> {wind}</span>
      </p>
    )}
    {error && <p className="weather__error">{error}</p>}
  </div>
);

export default Weather;
