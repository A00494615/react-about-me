import React, { useState, useEffect } from 'react';
import type { TownInfo, WeatherData } from '../types';

interface MyTownProps {
  data: TownInfo;
}

type TemperatureUnit = 'celsius' | 'fahrenheit';

const MyTown: React.FC<MyTownProps> = ({ data }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<TemperatureUnit>('celsius');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=27.48&longitude=83.56&current=temperature_2m`
        );
        
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        
        const weatherData = await response.json();
        
        setWeather({
          temperatureC: Math.round(weatherData.current.temperature_2m),
          temperatureF: Math.round((weatherData.current.temperature_2m * 9/5) + 32),
        });
      } catch (err) {
        setError('Failed to load weather data');
        // Fallback mock data for demo
        setWeather({
          temperatureC: 15,
          temperatureF: 59,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getDisplayTemperature = (): number => {
    if (!weather) return 0;
    return unit === 'celsius' ? weather.temperatureC : weather.temperatureF;
  };


  const getWeatherImage = (temp: number) => {
    if (temp <= 10) return 'cold.png';
    if (temp <= 19) return 'mild.png';
    return 'sunny.png';
  };

  return (
    <div className="my-town">
      <div className="header-section">
        <h1>My Town</h1>
        <img src="public/Lumbini.jpg" alt="Lumbini" width="600" />
      </div>
      <div className="content">
        <h2>I live in {data.name}</h2>
        {data.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        
        {/* Weather Section */}
        <div className="weather-section">
          <div className="weather-header">
            <h3>Current Weather</h3>
            <div className="temperature-buttons">
              <button 
                className={`unit-button ${unit === 'celsius' ? 'active' : ''}`}
                onClick={() => setUnit('celsius')}
              >
                °C
              </button>
              <button 
                className={`unit-button ${unit === 'fahrenheit' ? 'active' : ''}`}
                onClick={() => setUnit('fahrenheit')}
              >
                °F
              </button>
            </div>
          </div>
          
          {loading && <p>Loading weather...</p>}
          {error && <p className="error">{error}</p>}
          {weather && (
            <div className="weather-info">
              <img 
                src={`/public/${getWeatherImage(weather.temperatureC)}`}
                alt="Weather"
                className="weather-image"
              />
              <div className="weather-details">
                <p className="temperature">
                  {getDisplayTemperature()}°{unit === 'celsius' ? 'C' : 'F'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTown;