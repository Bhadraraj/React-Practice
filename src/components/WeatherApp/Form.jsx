import React from 'react';

const Form = ({ getWeather }) => (
  <form onSubmit={getWeather}>
    <input type="text" name="longitude" placeholder="Longitude...(Ex-159)" />
    <input type="text" name="latitude" placeholder="Latitude...(Ex-35)" />
    <button>Get Weather</button>
  </form>
);

export default Form;
