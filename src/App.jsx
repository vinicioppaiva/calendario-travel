import React, { useState } from 'react';
import CalendarGrid from './components/calendar/CalendarGrid';
import SearchBar from './components/shared/SearchBar';
import WeatherCard from './components/weather/WeatherCard';
import { getWeatherByCity } from './services/weatherAPI';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-left">
          <h1>Travel Calendar ✈️</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {weather && (
          <div className="weather-minimal">
            <span>🌡️ {Math.round(weather.main?.temp)}°C</span>
          </div>
        )}
      </header>

      <main className="app-content">
        <div className="calendar-section">
          <CalendarGrid onDayClick={setSelectedDay} selectedDay={selectedDay} />
        </div>
        <aside className="sidebar">
          <WeatherCard data={weather} selectedDay={selectedDay} />
        </aside>
      </main>
    </div>
  );
}

export default App;