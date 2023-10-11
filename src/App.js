import React, { useState, useEffect } from 'react';
import './App.css';

const api = {
  key: "61b5a9dff9b7b348c1b3642d4ac5aff4",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`${api.base}weather?q=Jakarta&units=imperial&appid=${api.key}`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeather(null); // Set weather data to null in case of an error
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App Plaza Indonesia</h1>

        {weather ? (
          <div>
            <p>{weather.main.temp}° F</p>
            <p>{weather.weather[0].description}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </header>
    </div>
  );
}

export default App;
